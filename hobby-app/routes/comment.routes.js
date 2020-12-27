const auth = require('../middleware/auth.middleware')
const {Router} = require('express')
const mysql = require('mysql2')
const router = Router()
require('dotenv').config()


const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

// /api/comment/product/:id - get comment by product id
router.get('/product/:id', auth, async (req, res) => {
    try{
        const id = req.params.id
        pool.query('SELECT * FROM mydb.comments where (`user_owns_product_ID` = ?);',
            [id],async (err,data) => {
            return err? res.status(500).json({message:err}): res.json(data);
        })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// /api/comment/product/create - create comment by product id
router.post('/product/create', auth, async (req, res) => {
    try{
        const {userId} = req.userData
        const {text, productId} = req.body
        pool.query('INSERT INTO `mydb`.`comments` (`TEXT`, `user_owns_product_ID`, `user_ID`) VALUES (?, ?, ?);',
            [text, productId, userId],async (err) => {
                return err? res.status(500).json({message:err}):
                    res.status(201).json({message:'Created'});
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router