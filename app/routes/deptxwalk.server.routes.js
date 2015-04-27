
// routes that will be registered one time with express app object (express.js)

var deptxwalk = require('../../app/controllers/deptxwalk.server.controller');

// this is a rest API endpoint route
module.exports = function(app) {
    // callback to controller method to get data 
	app.route('/:fieldname/:srchterm').get(deptxwalk.fetchdata)
};