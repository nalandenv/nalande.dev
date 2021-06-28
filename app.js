var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    Project  = require("./models/projects"),
    seeds    = require("./seeds"),
    routes   = require("./routes/routes"); //importing routes

// setup database for projects

mongoose.connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});
// seeds();
// Setting up view engine for ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(routes);

app.listen(process.env.PORT, process.env.IP);
