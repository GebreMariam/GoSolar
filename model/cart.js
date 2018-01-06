var mongoose = require('mongoose');
var items = require("items");
var schema = mongoose.Schema({
    item: {
        type: string,
        required: true
    },

    quantity: {
        type: int,
        required: true
    },

    DollarAmt: {
        type: string,
        required: true
    }
});

var cart_Schema = new Schema({
});

var cart = mongoose.model("cart", cart_Schema);

function update(items) {
    var shoppingItem = items.itemName
    quantity = () => {
        // ui form field for cart quantity
        if(quantity === ""){
            //form.field = 1;
        }
        else {}
    }
    
    add = () => {
        //cart ui 
    }
}


module.exports = cart;