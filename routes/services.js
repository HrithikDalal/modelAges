var express = require("express");
var router = express.Router();
var Service = require("../models/service");


//NEW ROUTE
router.get("/new", function(req,res){
    res.render("services/new");
});


//CREATE ROUTE
router.post("/", function(req, res){
    Service.create(req.body.service, function(err, newlyCreated){
        if(err){
            console.log(err);
            res.redirect("/new");
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/services");
        }
    });
  });


//INDEX ROUTE
router.get("/", function(req,res){
    Service.find({}, function(err, allServices){
         if(err){
             console.log(err);
         }else {
              res.render("services/index",{services: allServices});
            }
      });
});


//EDIT ROUTE

router.get("/:id/edit",function(req,res){
    Service.findById(req.params.id,function(err, foundService){
        if (err){
            res.redirect("/services");
        }else{
             res.render("services/edit",{service: foundService});
        }
    });
});

//UPDATE ROUTE

router.put("/:id",function(req,res){
  Service.findByIdAndUpdate(req.params.id,req.body.service, function(err, updatedService){
     if(err){
         res.redirect("/services");
     } else{
         res.redirect("/services")
     }
  }); 
});

//DESTROY ROUTE

router.delete("/:id",function(req,res){
 Service.findByIdAndRemove(req.params.id, function(err){
     if(err){
         res.redirect("/services");
     }else{
         res.redirect("/services");
     }
 })
});

module.exports=router;