const dataMapper = require('../dataMapper.js');

const productController = {
    productDescription: async (req, res) => {
        try{
            const id = req.params.id;
            const product = await dataMapper.getProduct(id);
            res.render('produit', {product});
        }catch(error){
            console.log('Error executing query in productController');
        }
    }
};

module.exports = productController;