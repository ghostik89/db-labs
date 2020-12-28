const auth = require('../middleware/auth.middleware')
const {Router} = require('express')
const mysql = require('mysql2')
const admin = require('../middleware/admin.middleware')
const router = Router()
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

// /api/products/allProducts - show all products
router.get('/allProducts', auth, async (req, res) => {
    try{
        pool.query('SELECT * FROM mydb.products;',[],async (err,data) => {
            return err? res.status(500).json({message:err}): res.status(200).json(data);
        })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// /api/products/product/:id - get product by id
router.get('/product/:id', auth, async (req, res) => {
    try{
        const id = req.params.id
        pool.query('SELECT ' +
            'products.ID,' +
            'products.NAME, ' +
            '    products.DESCRIPTION, ' +
            '    game_series.DESCRIPTION as gameSeriesDescr,' +
            'published_houses.NAME as pubName, ' +
            '    category.NAME as categoryName' +
            ' FROM mydb.products\n' +
            'join mydb.game_series on game_series.ID = products.game_series_ID\n' +
            'join mydb.published_houses on published_houses.ID = products.published_houses_ID\n' +
            'join mydb.category on category.ID = products.category_ID\n' +
            'where products.ID = ?;',[id],
            async (err, data) => {
                return err? res.status(500).json({message:err}): res.status(200).json(data);
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// /api/products/create - create product
router.post('/create', auth, admin, async (req, res) => {
    try{
        const {name, count, description, gameSeriesId, publishedHouseId, articleId,
            auditoryId, categoryId} = req.body
        pool.query('INSERT INTO `mydb`.`products`  (`NAME`, `COUNT`, `DESCRIPTION`, `game_series_ID`, ' +
            '`published_houses_ID`, `article_ID`, `auditory_of_games_ID`, `category_ID`) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [name, count, description, gameSeriesId, publishedHouseId, articleId,
            auditoryId, categoryId],
            async (err) => {
                return err? res.status(500).json({message:err}):
                    res.status(201).json({message:'Created'});
            })
    }catch (e) {
        console.log(e)
        return res.status(500).json({message: 'Internal server error'})
    }
})

module.exports = router