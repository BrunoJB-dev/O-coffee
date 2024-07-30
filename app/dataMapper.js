const database = require('./database');

const dataMapper = {
    async getAllProducts(){
        try{
        const query = "SELECT * FROM coffee LIMIT 3;";
        const result = await database.query(query);
        return result.rows;
    }catch(error){
        console.log('Error in getAllProducts', error);
    }
}
};


module.exports = dataMapper;