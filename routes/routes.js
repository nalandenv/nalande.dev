var express = require("express"),
    router = express.Router();

router.get("/", function(req, res){
    res.render("home");
});

//about me
router.get("/about_me", function(req, res){
    res.render("about_me");
});

// projects
router.get("/projects", function(req, res){
    res.render("projects");
});

router.get("/resume", function(req, res){
    res.render("resume");
});

module.exports = router;