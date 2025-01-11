require('dotenv').config();

const { Pool } = require('pg');

// Connexion directe
const pool = new Pool({
  connectionString: process.env.PG_URL,
});

pool.connect()
  .then(() => console.log('Connected to the database!'))
  .catch((err) => console.error('Database connection error:', err));

// Exemple de requête
pool.query('SELECT NOW()')
  .then((res) => console.log('Current database time:', res.rows[0]))
  .catch((err) => console.error('Error executing query:', err));

const dotenv = require('dotenv');
const express = require("express");
const path = require("path");
dotenv.config();

const router = require('./app/router');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

app.use(express.static('public'));

//PG_URL=postgres://ocoffee:ocoffee@localhost/ocoffee





app.use(router);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});