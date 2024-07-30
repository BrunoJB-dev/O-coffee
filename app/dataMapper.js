const database = require('./database');

const dataMapper = {
    async getAllProducts(){
        const query = "SELECT * FROM coffee LIMIT 3";
        const result = await database.query(query);
        return result.rows;
    }
};


module.exports = dataMapper;