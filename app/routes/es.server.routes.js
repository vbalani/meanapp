
// routes that will be registered one time with express app object (express.js)

var ESServer = require('../../app/controllers/es.server.controller');

// this is a rest API endpoint route
module.exports = function(app) {
    // callback to controller method to get data 
	app.route('/ESQ/:srchterm').get(ESServer.esAutoCompleteFetch)
};
