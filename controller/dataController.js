
const db = require('../models');
const bodyParser = require('body-parser');

module.exports = {
    CostData: function(req, res) {
        console.log('REGION IS ', req.params.region);
        db.costData
        .find({state: req.params.region})
        .sort({ natural: -1 })
        .then((data) => res.json(data[0]))
        .catch(err => res.status(422).json(err));
    },
    Products: function(req, res) {
        console.log('FETCHING PRODUTS!');
        db.products
        .find()
        .then((data) => res.json(data))
        .catch(err => res.status(422).json(err));
    }
}