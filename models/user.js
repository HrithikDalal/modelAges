var mongoose             = require("mongoose");
var mongoose             = require("mongoose"),
    passportLocalMongoose =require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: String,
    gender: String,
    email : {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password : String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin :{type : Boolean, default: false}
    
});
UserSchema.plugin(passportLocalMongoose);

module.exports= mongoose.model("User", UserSchema);