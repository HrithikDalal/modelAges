var mongoose = require("mongoose");

var testimonialSchema=new mongoose.Schema({
    author  : String,
    body:String,
    // author: {
    //     id:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     },
    //     username: String
    // }
    created : {type: Date, default: Date.now},
    rating: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Testimonial", testimonialSchema);