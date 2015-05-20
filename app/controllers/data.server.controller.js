var mongoose = require('mongoose');
var metadata = require('./metadata.server.controller');

// this method will be called by the assoc route
// database fetch has to be set as an asynch call back to an anonymous function 
// if successful will return json data
// this is REST API

exports.fetchdata = function(req, res) {
    
    console.log('routed to data server');
   // Check what are the access controls for the user recname parameter combo
    
    // ----------------------------
    

    fieldSelection = new Object;
    // get the select list
    fieldSelection = metadata.getSelectList(req.params.user, req.params.recname);
   
    
    // Build Criteria
    
    //-----------------------------
    
    console.log('srchterm: ' + req.params.srchterm);
    // add row level filters or field value based filter
    //--------------------------------------------
    
    // build a value name pair object (type object) to pass to the find function
    var searchTermJson = JSON.parse(req.params.srchterm);
    console.log('after json conv : ' + searchTermJson[0]);
    
    if (!dRecord) {
    // var dRecord = mongoose.model(req.params.recname,dSchema);
        var dRecord = mongoose.connection.db.collection(req.params.recname);
    }
    // {DEPT_DESCR:1,ACCOUNT_DESCR: 1, VENDOR: 1, DESCR: 1, ACCOUNT2: 1, _id: 0}
    dRecord.find( searchTermJson,fieldSelection).toArray( function(err, depts){
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


};