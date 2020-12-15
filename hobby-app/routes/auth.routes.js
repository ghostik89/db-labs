const {Router} = require('express')
const bcrypt = require('bcrypt')
const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
require('dotenv').config()

const router = Router()


const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

// /api/auth
router.get('/login', [
    check('email', 'Envalid email').normalizeEmail().isEmail(),
    check('password').exists()
], async (req, res) => {
    try{

        const errors = validationResult(req)
        
        if(!req.body || !errors.isEmpty())
            return res.status(400).json('Bad request')

        const {email, password} = req.body

        pool.query("SELECT * FROM mydb.user where EMAIL = ?;",
        [email],
        async (err, data) => {
                if(err) 
                    return res.status(500).json({message:err});
                const isMatch = await bcrypt.compare(password, data[0].PASSWORD)

                if(data.length == 0 && !isMatch)
                    return res.status(403).json({message: 'Unauthorizen'});

                const token = jwt.sign({userId:  data[0].ID}, process.env.SECRET_KEY, {expiresIn: '1h'})

                return res.json({token});
        });

    }catch(e){
        return res.status(500).json({message:'Enternal server error'})
    }
})

// /api/auth
router.post('/register', [
    check('email', 'Envalid email').isEmail(),
    check('password', 'Weak password').isLength({min: 6})
],async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!req.body || !errors.isEmpty()) 
            return res.status(400).json('Bad request')

        const {name, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 12)

        pool.query("INSERT INTO `mydb`.`user` (`NAME`, `EMAIL`, `PASSWORD`) VALUES (?, ?, ?);",
        [name, email, hashedPassword],
        (err, data) => {
                if(err) 
                    return res.status(500).json({message:err});
                return res.status(201).json({message: 'Created'});
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({message:'Enternal server error'})
    }
})


module.exports = router