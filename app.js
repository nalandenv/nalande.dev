var express = require("express"),
    app     = express();

// Setting up view engine for ejs
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.listen(process.env.PORT, process.env.IP);