// dev  params
// server listner port etc.

var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://localhost/' + process.env.NLDB
};
