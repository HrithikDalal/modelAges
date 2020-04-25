var mongoose = require("mongoose");

var serviceSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    appointment:String,
    cost:Number
});

module.exports = mongoose.model("Service", serviceSchema);