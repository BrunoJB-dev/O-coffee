const dataMapper = require("../dataMapper");

const catalogueController = {
    cataloguePage: async (req, res) => {
        try{
            const coffees = await dataMapper.getAllProducts();
        res.render('catalogue', {coffees});
    }catch(error){
        console.log('Error executing query in catalogueController');
    }
  },
    getAllProducts: async (req, res) => {
        try{
            const coffees = await dataMapper.getAllProductsNoLimit();
            res.json(coffees);
        }catch(error){
            console.log('Error fetching all products', error);
        }
    }
};

module.exports = catalogueController;