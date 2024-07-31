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
},
    async getProduct(id){
        try{
            const result = await database.query('SELECT * FROM coffee WHERE id = $1;', [id]);
            return result.rows[0];
        }catch(error){
            console.log('Error in getProduct', error);
        }
    }
};


module.exports = dataMapper;