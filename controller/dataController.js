
const db = require('../models');
const bodyParser = require('body-parser');


module.exports = {
    AddCostData: function(req, res) {
        //Post CostData - temporary
        db.costData
            .create(req.body)   
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));                
    },
    GetCostData: function(req, res) {
        db.costData
        .find(req.query)
        .sort({data: -1})
        .then(dbModel => res.jsong(dbModel))
        .catch(err => res.status(422).json(err));
    }
}