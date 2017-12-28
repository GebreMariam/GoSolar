// app/models.js
//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//user schema
var costSchema = mongoose.Schema({
    state    : {
        type: ["double"],
        required: true        
    },
    Jan    : {
        type: ["double"],
        required: true        
    },
    Feb   : {
        type: ["double"],
        required: true        
    },
    Mar: {
        type: ["double"],
        required: true
    },
    Apr    : {
        type: ["double"],
        required: true        
    },
    May   : {
        type: ["double"],
        required: true        
    },
    Jun: {
        type: ["double"],
        required: true
    },
    Jul    : {
        type: ["double"],
        required: true        
    },
    Aug   : {
        type: ["double"],
        required: true        
    },
    Sep: {
        type: ["double"],
        required: true
    },
    Oct    : {
        type: ["double"],
        required: true        
    },
    Nov   : {
        type: ["double"],
        required: true        
    },
    Dec: {
        type: ["double"],
        required: true
    }
});

//create model for users and expose to app
module.exports = mongoose.model('CostData', costSchema);