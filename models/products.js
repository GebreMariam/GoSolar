
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  
    productName: {
        type: String,
        required: true
    },
    productDescript: {
        type: String,
        required: true
    },
    cost: {
        type: ["double"],
        required: true
    },
    weight: {
        type: ["double"],
        required: false
    },
    imgURL: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: false
    },
    manufacturer: {
        type: String,
        required: false
    },
    moduleType: {
        type: String,
        required: true
    }

});

var Products = mongoose.model("Products", ProductSchema);

module.exports = Products;