// the super express setup script
// express framwwork instantiation called on by server.js

/*
First we required the Express module, then we used the CommonJS 
module pattern to define a module function that initializes the 
Express application. First, it creates a new instance of an Express 
application, and then it requires the  routing file and calls it 
as a function passing it the application instance as an argument. 
The routing file we made before will use the application instance 
to create a new routing configuration and will call the controller’s 
render() method. The module function ends by returning the 
application instance. The express.js file is where we configure our 
Express application. This is where we add everything related to the 
Express configuration.

*/

var express = require('express');

// setup some express app parameters and inject the routes. 

module.exports = function() {
    
    var app = express();
	
	// views folder , templates are renderdd from here 
    // in client server world we may not need this folder
	app.set('views', './app/views');

	// templating engine jade ejs etc.
    // in client server world we may not need this
	app.set('view engine', 'ejs');

	// folder where static files will be served images etc.
    // important area this is where the client (angular app and it's files and structure will be stored and served from)
	app.use(express.static('./public'));
    
   //  register all the routes (<routename/type>route.js) with the express app object
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/deptxwalk.server.routes.js')(app);
    
    return app;
};