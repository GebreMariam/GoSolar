
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: ["double"],
        required: true
    },
    imgURL: {
        type: Array,
        required: false
    },
    manufacturer: {
        type: String,
        required: false
    },
    user: [{
        type: Schema.Types.ObjectId,        
        ref: "User"
    }]
});

var Orders = mongoose.model("Orders", OrderSchema);

module.exports = Orders;