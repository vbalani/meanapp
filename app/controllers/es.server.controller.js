// var config = require('./config'), // get db connect parameters 
console.log('es 1');
var elasticsearch = require('elasticsearch');

console.log ('es 2');
var esClient = new elasticsearch.Client({
  host: 'localhost:9200',
//  log: 'trace'
});

console.log('es 3');


// serves the auto suggestions
exports.esAutoCompleteFetch = function(req,res) {
  
  // instantiate the query dsl for ES
    var srchobj = {};
    /*
  index: 'nldev', // this has to be parametrized 
  type: 'nl_autocomplete', // this has to be parametrized 
  body: {
    size: 8,
    query: {
      match: {
          _all: {
        query: 'owen erner'
      }
    }
  }
  }
};
*/
    res.header("Access-Control-Allow-Origin", "*");
 // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 // next();
    console.log('srchterm: ' + req.params.srchterm);
    
    srchobj = JSON.parse(req.params.srchterm);
    
    console.log("Raw QDSL: ", srchobj);
    
   // srchobj.body.query.match._all.query = req.params.srchterm;
    
    esClient.search(srchobj).then(function (resp) {
    var hits = resp.hits.hits;
    //console.log(JSON.stringify(hits));
    
    console.log("hits " + hits.length );
    hits2 = [];
    if (hits.length > 0) { 
        hits2[0] = hits[0]._source;
        for (i = 1; i < hits.length; i++) {
            hits2.push(hits[i]._source);
        }
    }
         console.log(hits2[0]);
        
       console.log('keys:  ', Object.keys(hits2[0]));
        
   res.json(hits2);
    
}, function (err) {
    console.trace(err.message);
});
};
// end auto suggestions 


// response for a selected suggestion NEX --??

// END response for a selected suggestion NEX --??


// response for enter key pressed on a phrase on global search NEX - ??

// END  - response for enter key pressed on a phrase on global search NEX - ??




// response for main data grid NEX ??

// get meta data

// get raw data 

// send meta data + raw data

// END response for main data grid
