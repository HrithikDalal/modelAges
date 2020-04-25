var express = require("express");
var router = express.Router();
var Blog = require("../models/blog");
var middleware = require("../middleware");



//NEW ROUTE
router.get("/new", function(req,res){
    res.render("blogs/new");
});



//CREATE ROUTE
router.post("/", function(req, res){
    Blog.create(req.body.blog, function(err, newlyCreated){
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


//INDEX
router.get("/",middleware.isLoggedIn, function(req,res){
    Blog.find({}, function(err, allBlogs){
         if(err){
             console.log(err);
         }else {
              res.render("blogs/index",{blogs: allBlogs});
            }
      });
});




//SHOW ROUTE
router.get("/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err)
        {
            res.redirect("/blogs")
        }else
        {
            res.render("blogs/show",{blog:foundBlog});
        }
    });
});




//EDIT ROUTE

router.get("/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        }else{
             res.render("blogs/edit",{blog: foundBlog});
        }
    });
});

//UPDATE ROUTE

router.put("/:id",function(req,res){
  Blog.findByIdAndUpdate(req.params.id,req.body.blog, function(err, updatedBlog){
     if(err){
         res.redirect("/blogs");
     } else{
         res.redirect("/blogs/+req.params.id")
     }
  }); 
});

//DESTROY ROUTE

router.delete("/:id",function(req,res){
 Blog.findByIdAndRemove(req.params.id, function(err){
     if(err){
         res.redirect("/blogs");
     }else{
         res.redirect("/blogs");
     }
 })
});



module.exports=router;