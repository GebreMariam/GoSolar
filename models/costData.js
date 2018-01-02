// app/models.js
//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//user schema
var costSchema = mongoose.Schema({
    state    : {
        type: String
    },
    Jan : {
        type: ["double"]
    },
    Feb : {
        type: ["double"]       
    },
    Mar : {
        type: ["double"]
    },
    Apr : {
        type: ["double"]
    },
    May: {
        type: ["double"]
    },
    Jun : {
        type: ["double"]
    },
    Jul : {
        type: ["double"]      
    },
    Aug : {
        type: ["double"]
    },
    Sep : {
        type: ["double"]
    },
    Oct : {
        type: ["double"]       
    },
    Nov : {
        type: ["double"]     
    },
    Dec : {
        type: ["double"]
    }
});

//create model for users and expose to app
module.exports = mongoose.model('CostData', costSchema);