require("dotenv").config();
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    flash           = require("connect-flash"),
    Service         = require("./models/service"),
    Testimonial     = require("./models/testimonial"),
    Image           = require("./models/image"),
    Blog            = require("./models/blog"),
    Quote           = require("./models/quote"),
    User            = require("./models/user");    

var mongoose = require("mongoose");
// console.log(process.env.DATABASEURL);
mongoose.connect(process.env.DATABASEURL,{useUnifiedTopology: true, useNewUrlParser: true });
var seedDB= require("./seeds");
seedDB();

var serviceRoutes       = require("./routes/services"),
    indexRoutes         = require("./routes/index"),
    imageRoutes         = require("./routes/images"),
    blogRoutes          = require("./routes/blogs"),
    quotetRoutes        = require("./routes/quotes"),
    testimonialRoutes   = require("./routes/testimonials");


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());


app.locals.moment = require('moment');

//PASSPORT CONFIGURATION
 
app.use(require("express-session")({
    secret:"This is my secret",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
   res.locals.currentUser= req.user;
   res.locals.error=req.flash("error");
   res.locals.success=req.flash("success");
   next();
});


app.use("/", indexRoutes);
app.use("/services",serviceRoutes);
app.use("/images",imageRoutes);
app.use("/blogs",blogRoutes);
app.use("/quotes",quotetRoutes);
app.use("/testimonials",testimonialRoutes);


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Salon server has Started!");
});