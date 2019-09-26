var express = require("express"),
    router = express.Router(),
    Project  = require("../models/projects");

router.get("/", function(req, res){
    res.render("home");
});

//about me
router.get("/about_me", function(req, res){
    res.render("about_me");
});

// projects
router.get("/projects", function(req, res){
    Project.find({}, function(err, foundProject){
        if(err){
            res.redirect("back");
        } else {
            res.render("projects",{project: foundProject});
        }
    })
    
});

router.get("/resume", function(req, res){
    res.render("resume");
});

module.exports = router;