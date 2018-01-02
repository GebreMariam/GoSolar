
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  
    name: {
        type: String,
        required: true
    },
    briefDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    price: {
        type: ["double"],
        required: true
    },
    weight: {
        type: ["double"],
        required: false
    },
    imgURL: {
        type: Array,
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