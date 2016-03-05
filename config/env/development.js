// dev  params
// server listner port etc.

var port = 1370;

module.exports = {
	port: port,
	db: 'mongodb://localhost/' + process.env.NLDB
};
