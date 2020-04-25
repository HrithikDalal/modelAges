var express = require("express");
var router = express.Router();
var Image = require("../models/image");


//NEW ROUTE
router.get("/new", function(req,res){
    res.render("images/new");
});




//CREATE ROUTE
router.post("/", function(req, res){
    Image.create(req.body.image, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.redirect("/new");
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/");
        }
    });
  });



//INDEX ROUTE
router.get("/", function(req,res){
    Image.find({}, function(err, allImages){
         if(err){
             console.log(err);
         }else {
              res.render("images/index",{images: allImages});
            }
      });
});


//SHOW ROUTE
router.get("/:id", function(req, res){
    Image.findById(req.params.id, function(err, foundImage){
        if(err)
        {
            res.redirect("/images")
        }else
        {
            res.render("images/show",{image:foundImage});
        }
    });
});




//EDIT ROUTE

router.get("/:id/edit",function(req,res){
    Image.findById(req.params.id,function(err, foundImage){
        if (err){
            res.redirect("/images");
        }else{
             res.render("images/edit",{image: foundImage});
        }
    });
});

//UPDATE ROUTE

router.put("/:id",function(req,res){
  Image.findByIdAndUpdate(req.params.id,req.body.image, function(err, updatedImage){
     if(err){
         res.redirect("/images");
     } else{
         res.redirect("/images/+req.params.id")
     }
  }); 
});

//DESTROY ROUTE

router.delete("/:id",function(req,res){
 Image.findByIdAndRemove(req.params.id, function(err){
     if(err){
         res.redirect("/images");
     }else{
         res.redirect("/images");
     }
 })
});




module.exports=router;