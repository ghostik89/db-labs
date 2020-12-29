const express = require('express')
const bodyParser = require("body-parser");

require('dotenv').config()
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/comment', require('./routes/comment.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/owners', require('./routes/owners.routes'))
app.use('/api/user', require('./routes/user.routes'))


app.listen(process.env.PORT? process.env.PORT : 5000, () => {
     console.log('App has been started at ' + process.env.PORT)
})