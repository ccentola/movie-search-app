var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/results", function(req, res){
    request("http://omdbapi.com/?s=massachusetts&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);

            // return the title of the first movie
            res.render("results", {data: data});
            //console.log(parsedData)
        }
    });
});

/* app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THE SERVER HAS STARTED");
}); */

app.listen(3000, function(){
    console.log("THE SERVER HAS STARTED");
});