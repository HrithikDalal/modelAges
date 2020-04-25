var express = require("express");
var router = express.Router();
var Testimonial = require("../models/testimonial");
var middleware = require("../middleware");

//NEW ROUT
router.get("/new",middleware.isLoggedIn, function(req,res){
    res.render("testimonials/new");
});

//CREATE ROUT
router.post("/", function(req, res){
    Testimonial.create(req.body.testimonial, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.redirect("/new");
        } else {
            newlyCreated.author = req.user.username;
            newlyCreated.save();
            console.log(newlyCreated);
            res.redirect("/testimonials");
        }
    });
  });

//INDEX ROUT
router.get("/", function(req,res){
    Testimonial.find({}, function(err, allTestimonials){
         if(err){
             console.log(err);
         }else {
              res.render("testimonials/index",{testimonials: allTestimonials});
            }
      })
});



//EDIT ROUTE

router.get("/:id/edit",function(req,res){
    Testimonial.findById(req.params.id,function(err, foundTestimonial){
        if (err){
            res.redirect("/testimonials");
        }else{
             res.render("testimonials/edit",{testimonial: foundTestimonial});
        }
    });
});

//UPDATE ROUTE

router.put("/:id",function(req,res){
  Testimonial.findByIdAndUpdate(req.params.id,req.body.testimonial, function(err, updatedTestimonial){
     if(err){
         res.redirect("/testimonials");
     } else{
         res.redirect("/testimonials")
     }
  }); 
});

//DESTROY ROUTE

router.delete("/:id",function(req,res){
 Testimonial.findByIdAndRemove(req.params.id, function(err){
     if(err){
         console.log(err);
         res.redirect("/testimonials");
     }else{
         res.redirect("/testimonials");
     }
 })
});



module.exports=router;