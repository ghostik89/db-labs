const express = require('express')
const mysql = require('mysql2')
const bodyParser = require("body-parser");

require('dotenv').config()
const app = express()

const urlencodedParser = bodyParser.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    user: "root",
    database: "mydb",
    password: "password"
});

// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM mydb.user;", function(err, data) {
        if(err) return res.status(500).json({message:err});
        else return res.status(200).json(data);
    });
});

app.listen(process.env.PORT? process.env.PORT : 5000, () => {
     console.log('App has been started at ' + process.env.PORT)
})