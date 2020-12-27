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

// /api/category/all - create comment by product id
router.get('/all', auth, async (req, res) => {
    try{
        pool.query('SELECT * FROM mydb.category;',
            [],async (err,data) => {
                return err? res.status(500).json({message:err}): res.json(data);
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router