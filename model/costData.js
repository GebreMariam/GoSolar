var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cdSchema = new Schema({
    state: {
        type: string,
        validate: {
            len: [2]
        }
    },
    Jan:{
        type: float,
        required: true
    },
    feb: {
        type: float,
        required: true
    },
    mar:{
        type: float,
        required: true
    },
    apr: {
        type: float,
        required: true
    },
    may: {
        type: float,
        required: true
    },
    jun: {
        type: float,
        required: true
    },
    jul: {
        type: float,
        required: true
    },
    aug: {
        type: string,
        required: true
    },
    sep: {
        type: float,
        required: true
    },
    oct: {
        type: float,
        required: true
    },
    nov: {
        type: float,
        required: true
    },
    dec: {
        type: float,
        required: true
    },
    average: {
        type: float,
        required: true
    }
});

var CostData = mongoose.model("CostData", cdSchema);

module.exports = CostData;
