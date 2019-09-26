var express = require("express"),
    app     = express();

// Setting up view engine for ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// home directory
app.get("/", function(req, res){
    res.render("home");
});

//about me
app.get("/about_me", function(req, res){
    res.render("about_me");
});

app.listen(process.env.PORT, process.env.IP);