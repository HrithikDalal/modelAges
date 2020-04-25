var mongoose = require("mongoose");

var appointmentSchema=new mongoose.Schema({
    
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: String,  required: true},
    message:String,
    created : {type: Date, default: Date.now}
    
});

module.exports = mongoose.model("Appointment", appointmentSchema);