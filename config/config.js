

// then this is required by mongoose.js to make the connect
// The process.env is a global variable that allows you to access predefined environment variables, 
// and the most common one is NODE_ENV.

// so do this on linux prompt 
// export NODE_ENV=development


// point to dev or prod 
// the below will translate to the development.js file in env folder 
// that file has the connection params to database

module.exports = require('./env/' + process.env.NLENV + '.js');