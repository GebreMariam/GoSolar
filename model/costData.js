var mongoose = require('mongoose');
var schema = mongoose.Schema;

var CD_Schema = new Schema({

});

var CostData = mongoose.model("CostData", CD_Schema);

module.exports = CostData;
