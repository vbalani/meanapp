// link to the table

// mongoose model was set to have deptxwalk table accessible by instantiating models/deptxwalk.model.server
// var deptxwalk = require('mongoose').model('deptxwalk');

var deptxwalk = require('../models/deptxwalk.model.server');


// this method will be called by the assoc route
// database fetch has to be set as an asynch call back to an anonymous function 
// if successful will return json data
// this is REST API
exports.fetchdata = function(req, res) {
    
   
    // old DEPT_DESCR:  new RegExp(req.params.srchterm, 'i')
   
    var fname = '';
    fname = req.params.fieldname;
    console.log('fieldname param: ' + fname+ '    srchterm: ' + req.params.srchterm);
    
    // build a value name pair object (type object) to pass to the find function
    var searchCriteria = new Object;
    searchCriteria[fname] = new RegExp(req.params.srchterm, 'i');
    
    
      //  console.log('dept api param: ' + searchCriteria['VENDOR']);
    
    deptxwalk.find(searchCriteria ,{DEPT_DESCR:1,ACCOUNT_DESCR: 1, VENDOR: 1, DESCR: 1, _id: 0}, function(err, depts){
		if (err) {
			console.log('fetch error --- ' );
			return next(err);
		}
		else {
			// console.log(depts);
            console.log(depts.length + ': ROWS FETCHED');
			res.json( depts);	
		}
	});


// var deptxwalktbl = mongoose.model('deptxwalk',deptSchema);	
//console.log('dept db controller instantiated');
    
};