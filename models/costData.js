// app/models.js
//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//user schema
var costSchema = mongoose.Schema({
    state    : {
        type: String
    },
    1 : {
        type: ["double"]
    },
    2 : {
        type: ["double"]       
    },
    3 : {
        type: ["double"]
    },
    4 : {
        type: ["double"]
    },
    5: {
        type: ["double"]
    },
    6 : {
        type: ["double"]
    },
    7 : {
        type: ["double"]      
    },
    8 : {
        type: ["double"]
    },
    9 : {
        type: ["double"]
    },
    10 : {
        type: ["double"]       
    },
    11 : {
        type: ["double"]     
    },
    12 : {
        type: ["double"]
    }
});

//create model for users and expose to app
module.exports = mongoose.model('CostData', costSchema);