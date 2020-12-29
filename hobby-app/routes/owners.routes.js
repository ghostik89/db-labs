const auth = require('../middleware/auth.middleware')
const {Router} = require('express')
const mysql = require('mysql2')
const router = Router()
const admin = require('../middleware/admin.middleware')
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

// /api/owners/all/byProduct/:id - get info for product by owner
router.get('/all/byProduct/:id', auth, async (req, res) => {
    try{
        const id = req.params.id
        pool.query('SELECT user_owns_product.ID, user_owns_product.COUNT,' +
            'user_owns_product.price, user.NAME\n' +
            'FROM mydb.user_owns_product\n' +
            'join mydb.products on user_owns_product.products_ID = products.ID\n' +
            'join mydb.user on user_owns_product.user_ID = user.ID\n' +
            'where products_ID = ?;',
            [id],async (err,data) => {
                return err? res.status(500).json({message:err}): res.json(data);
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router