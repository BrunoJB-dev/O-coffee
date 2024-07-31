const dataMapper = require("../dataMapper");

const catalogueController = {
    cataloguePage: async (req, res) => {
        try{
            const coffees = await dataMapper.getAllProducts();
        res.render('catalogue', {coffees});
    }catch(error){
        console.log('Error executing query in catalogueController');
    }

  }
}

module.exports = catalogueController;