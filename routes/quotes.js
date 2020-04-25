var express = require("express");
var router = express.Router();
var Quote = require("../models/quote");



router.post("/", function(req, res){
   Quote.create(req.body.quote, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.redirect("/");
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/");
        }
    });
  });


router.get("/", function(req,res){
    Quote.find({}, function(err, allQuotes){
         if(err){
             console.log(err);
         }else {
              res.render("quotes/index",{quotes: allQuotes});
            }
      });
});



//DESTROY ROUTE

router.delete("/:id",function(req,res){
 Quote.findByIdAndRemove(req.params.id, function(err){
     if(err){
         console.log(err);
         req.flash("error",err.message);
         res.redirect("back");
         
     }else{
         res.redirect("/");
     }
 })
});


module.exports=router;