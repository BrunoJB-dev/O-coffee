const dataMapper = require('../dataMapper.js');

const shopController = {
    shopPage: (req, res) => {
        res.render('boutique');
    }
}

module.exports = shopController;