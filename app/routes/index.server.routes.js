// routes that will be registered one time with express app object (express.js)

module.exports = function(app) {
    
    // link to the assoc. controller, a different way of routes connecting to controllers than in angular
    var index = require('../controllers/index.server.controller');
 
       // in client server setup this is the only html type route we need on the server side if this was a rest api only then this line would be absent too
     app.get('/', index.render); 
 
    

    // ejs template with angular rendered from the app/views folder
   // app.get('/ej', index.renderEjs);
    
    
};