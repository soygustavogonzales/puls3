// Load app dependencies

var express = require("express"),
	mongoose = require("mongoose"),
	http = require("http");
var app = express();

// Configure: bodyParser to parse JSON data
// 			methodOverride toimplement custom HTTP methods
// 			router to create custom routes

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static('./public'));
	app.use(app.router);
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

// Sample routes are in separate modules to keep code clean
 routes = require('./routes/router')(app);

// Conect to the MongoDB  pictures database

mongoose.connect('mongodb://puls3:matadorg1@ds049848.mongolab.com:49848/puls3');

// Start the server

http.createServer(app).listen(8080);
console.log("Server runnig at http://shielded-beach-5062.herokuapp.com")
