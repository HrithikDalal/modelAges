var mongoose = require("mongoose");

var imageSchema=new mongoose.Schema({
    name:String,
    url:String,
    description:String,
    created : {type: Date, default: Date.now}
});

module.exports = mongoose.model("Image", imageSchema);