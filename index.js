const express = require("express");
const path = require("path");

const router = require('./app/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));




app.use(router);

