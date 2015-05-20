
// routes that will be registered one time with express app object (express.js)

var dataServer = require('../../app/controllers/data.server.controller');

// this is a rest API endpoint route
module.exports = function(app) {
    // callback to controller method to get data 
	app.route('/:user/:recname/:srchterm').get(dataServer.fetchdata)
};