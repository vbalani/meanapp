var config = require('./config'), // get db connect parameters
    
mongoose = require('mongoose'); // initialize the mongooss object from the node module 
                                // this module is not the same as the mongoose.js (this file)

module.exports = function() {
	mongoose.connect(config.db , function(err, db) {
  if(!err) {
    console.log("We are connected to the mongo db");
  }
});
    
// require('../app/models/deptxwalk.model.server');
    
};

// gets called by server.js
// calls the native mongoose package 
// instantiates all the schemas we will use only one so far here (deptxwalk) 