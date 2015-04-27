// ******************************************
//   it  starts from here
// ******************************************

/* 
Mongoose configuration file has to be loaded before any other configuration in the server.js file
 (except the config module) because any module that is loaded after this module will be able to 
 use its models without loading it by itself.
 */
 

var config = require('./config/config'),  // get the dev or test or prod env variables
	mongoose = require('./config/mongoose'), // connect to mongoose
	express = require('./config/express');

var  app = express(); // initialize the express framwework for our app
 
mongoose(); // setup the mongoose object that will be used throughout
            // connect to db
            // initialize all model schemas we want to use.

app.listen(config.port);

module.exports = app; // make the app avail whereever needed.

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);