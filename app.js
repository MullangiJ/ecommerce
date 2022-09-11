const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const url = 'mongodb://localhost:27017/Ecommerce'

const app = express()
app.use(bodyParser.json());

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

//all routes
const User = require('./routes/users');
//const Products =  require('./routes/products');

//create user into db
app.use("/users", User);
//app.user("/products", Products);

app.listen(3000, () => {
    console.log('Server started')
})