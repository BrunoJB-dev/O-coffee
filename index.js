require('dotenv').config();

const dotenv = require('dotenv');
const express = require("express");
const path = require("path");
dotenv.config();

const router = require('./app/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

app.use(express.static('public'));




app.use(router);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});