const {Client} = require('pg');
require('dotenv').config();
const client = new Client(process.env.PG_URL);
client.connect()
.then(() => console.log('Connected to the database'))
.catch(err => {
    console.error('Database connection error', err);
})

module.exports = client;