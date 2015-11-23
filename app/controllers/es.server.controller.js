// var config = require('./config'), // get db connect parameters 
console.log('es 1');
var elasticsearch = require('elasticsearch');

console.log ('es 2');
var client = new elasticsearch.Client({
  host: '52.1.144.162:9200',
//  log: 'trace'
});

console.log('es 3');


// response to auto suggest selection request
exports.esAutoCompleteFetch = function(req,res) {
    var srchobj = {
  index: 'nldev',
  type: 'nl_autocomplete',
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
    res.header("Access-Control-Allow-Origin", "*");
 // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 // next();
    console.log('srchterm: ' + req.params.srchterm);
    
    srchobj.body.query.match._all.query = req.params.srchterm;
    
    client.search(srchobj).then(function (resp) {
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
        // console.log(hits2);
    res.json(hits2);
    
}, function (err) {
    console.trace(err.message);
});
};
// end auot suggest data response


// response for main data grid
