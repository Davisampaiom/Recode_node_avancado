const express=require('express');
const consign = require('consign');
const bodyParser=require('body-parser');
const cors = require("cors");





const app=express();

app.set('view engine', 'ejs')
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())





consign()
.include('./src/routes')
.into(app);


module.exports = app