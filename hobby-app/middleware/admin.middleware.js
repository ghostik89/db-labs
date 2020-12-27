require('dotenv').config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "mydb",
    password: process.env.DB_PASSWORD
});

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS')
        return next()

    try{
        const {userId} = req.userData
        pool.query('SELECT roles_ID FROM mydb.roles_has_user where user_ID = ?;', [userId],
            (err, data) =>{
                if(data.length === 0 || data[0].roles_ID !== 2)
                    return res.status(401).json({message: 'Unauthorized'})
                return next()
            })
    }catch (e) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}