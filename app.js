const http = require('http');

const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
// app.use((req,res,next)=> {
//     console.log('this always run');
//     next();
// })









app.listen(3000);
