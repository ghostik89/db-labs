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

// /api/user/info - get user info
router.get('/info', auth, async (req, res) => {
    try{
        const {userId} = req.userData
        pool.query('SELECT user.NAME as username, user.EMAIL, roles.NAME, roles.ID FROM mydb.user\n' +
            'join mydb.roles_has_user on roles_has_user.user_ID = user.ID\n' +
            'join mydb.roles on roles_has_user.roles_ID = roles.ID\n' +
            'where user.ID = 1;',
            [userId],async (err,data) => {
                return err? res.status(500).json({message:err}): res.json(data[0]);
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// /api/user/updateEmail/:email
router.put('/updateEmail/:email', auth, async (req, res) => {
    try{
        const {userId} = req.userData
        const {email} = req.params
        pool.query('UPDATE `mydb`.`user` SET user.EMAIL = ? WHERE (`ID` = ?);',
            [email, userId],async (err) => {
                return err? res.status(500).json({message:err}):
                    res.json({message:'Updated'});
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router