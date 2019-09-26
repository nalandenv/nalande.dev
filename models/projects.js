var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    hostedLink: String,
    githubRepo: String
});

module.exports = mongoose.model("Projects", projectSchema);