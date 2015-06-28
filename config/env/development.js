// dev  params
// server listner port etc.

var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://52.1.144.162/' + process.env.NLDB
};