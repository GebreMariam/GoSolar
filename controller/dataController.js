
const db = require('../models');
const bodyParser = require('body-parser');

module.exports = {
    CostData: function(req, res) {
        console.log('REGION IS ', req.params.region);
        db.costData
        .find({state: req.params.region})
        .sort({ natural: -1 })
        .then((data) => {
            // console.log(data)
            res.json(data)
        })
        .catch(err => res.status(422).json(err));
    },
    Products: function(req, res) {
        console.log('FETCHING PRODUTS!');
        db.products
        .find()
        .then((data) => res.json(data))
        .catch(err => res.status(422).json(err));
    },

    ProductDetails: function(req, res) {
        console.log('id is ', req.params);
        db.products
        .findById(req.params.id)
        .then((data) => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    Orders: function(req, res) {
        console.log('FETCHING orders! ' + req.params.user);
        db.orders
        .find({ user: req.params.user})
        .then((data) => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    CreateOrder: function (req, res) {
        console.log('orderCreate ', req.params.order)
        db.orders
        .save({order})
        .then((data) => res.json(data))
        .catch(err => console.log(err))
    }, 
    SignUp: function(req, res) {
        console.log('CREATING user', req.body);
        db.user
        .create(req.body)
        .then((data) => res.json(data))
        .catch(err => res.status(422).json(err));
    }
}