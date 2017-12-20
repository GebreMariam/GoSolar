// app/models.js
//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//user schema
var userSchema = mongoose.Schema({
    firstName    : {
        type: String,
        required: true        
    },
    lastName    : {
        type: String,
        required: true        
    },
    email   : {
        type: String,
        required: true        
    },
    password: {
        type: String,
        required: true
    }
});

//methods
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if valid password
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

//create model for users and expose to app
module.exports = mongoose.model('User', userSchema);