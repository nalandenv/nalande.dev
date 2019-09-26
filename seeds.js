var mongoose = require("mongoose"),
    Project  = require("./models/projects")  ;

var data = [
    {
    name: "Demo",
    image: "https://cdn.dribbble.com/users/476251/screenshots/2619255/attachments/523315/placeholder.png",
    description: "Aliquam a diam vitae leo lobortis porta eget et diam. Pellentesque sit amet ipsum odio. Vivamus mauris nunc, facilisis vulputate mi et, sodales rhoncus velit. Aliquam lobortis posuere condimentum. Sed sodales risus at nibh facilisis, et sodales massa mattis. Fusce fermentum vel lacus eget malesuada. Praesent ac lobortis velit. Aliquam eget sem eget ante sollicitudin viverra. Quisque sem ligula, venenatis ut congue eu, tempor non elit. Maecenas quis rhoncus nisl. Praesent ac aliquam lorem, eu commodo felis. Aliquam eu venenatis sapien. Etiam eu fermentum ligula, et scelerisque arcu. Ut viverra augue et nunc blandit efficitur.",
    hostedLink: "#",
    githubRepo: "#"
    },
    {
    name: "Demo 2",
    image: "http://www.4usky.com/data/out/34/164284775-field-wallpapers.jpg",
    description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla turpis nibh, placerat in tincidunt et, mattis in arcu. Morbi eu purus egestas, pulvinar leo id, faucibus nibh. Vivamus vehicula leo ipsum, lacinia tincidunt urna viverra ut. Nulla at orci sed risus pellentesque blandit vitae at neque. Proin erat justo, tristique ac ipsum et, lacinia rhoncus est. Vivamus non pretium elit. Integer sed nisi id mi pellentesque dapibus. Nulla in libero eros.",
    hostedLink: "#",
    githubRepo: "#"
    }
]

function addProject(){
    // remove all projects
    Project.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed");
    });
// add new CProject
    data.forEach(function(seed){
        Project.create(seed, function(err, proj){
            if(err){
                console.log(err);
            } else {
                console.log("Added Project");
            }
        });
    });
    Project.create()
}

module.exports = addProject;