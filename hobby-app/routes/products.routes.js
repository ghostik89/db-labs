const auth = require('../middleware/auth.middleware')
const {Router} = require('express')
const mysql = require('mysql2')

const router = Router()

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

// /api/products/allProducts
router.get('/allProducts', auth, async (req, res) => {
    try{
        pool.query('SELECT * FROM mydb.products;',[],async (err,data) => {
            return err? res.status(500).json({message:err}): res.status(200).json(data);
        })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router