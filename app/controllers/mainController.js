const dataMapper = require('../dataMapper.js');

const mainController = {
    homePage: async (req, res) => {
        try{
            const coffees = await dataMapper.getAllProducts();
            res.render('accueil', {coffees});
        }catch(error){
            console.log('Error executing query');
        }
    }
};

module.exports = mainController;