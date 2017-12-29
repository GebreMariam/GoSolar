
const db = require('../models');
const bodyParser = require('body-parser');

module.exports = {
    GetCostData: function(req, res) {
        console.log(req.params);
        db.costData
        .find({state: req.params.region})
        .sort({ natural: -1 })
        .then((data) => res.json(data[0]))
        .catch(err => res.status(422).json(err));
    }
}