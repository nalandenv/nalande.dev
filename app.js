var express  = require("express"),
    app      = express(),
    mongoose = require("mongoose"),
    Project  = require("./models/projects"),
    seeds    = require("./seeds"),
    routes   = require("./routes/routes"); //importing routes
    const PORT = process.env.PORT || 3000;

// setup database for projects
const dbURL = process.env.DATABASEURL;
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});
// seeds();
// Setting up view engine for ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(routes);
app.get("/resume", function(req, res){
    res.sendFile(__dirname + "/public/assets/Resume - Nikhil Nalande - Full Stack Developer.pdf");
});
app.listen(PORT, function() {
    console.log(`Server Started on ${PORT}`);
});
