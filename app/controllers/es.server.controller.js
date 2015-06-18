// var config = require('./config'), // get db connect parameters 
console.log('es 1');
var elasticsearch = require('elasticsearch');

console.log ('es 2');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
//  log: 'trace'
});

console.log('es 3');

exports.esAutoCompleteFetch = function(req,res) {
    var srchobj = {
  index: 'nldev',
  type: 'vendorsa',
  body: {
    size: 500,
    query: {
      match: {
          _all: {
        query: 'cardinal'
      }
    }
  }
  }
};
    
    console.log('srchterm: ' + req.params.srchterm);
    
    srchobj.body.query.match._all.query = req.params.srchterm;
    
    client.search(srchobj).then(function (resp) {
    var hits = resp.hits.hits;
    //console.log(JSON.stringify(hits));
    
    console.log("hits " + hits.length + " ==== ");
    hits2 = [];
    hits2[0] = hits[0]._source;
    for (i = 1; i < hits.length; i++) {
        hits2.push(hits[i]._source);
    }
    // console.log(hits2);
        res.json(hits2);
}, function (err) {
    console.trace(err.message);
});
};
