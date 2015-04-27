// expose as many methods you like

// this one is that will server the client server's SPA shell html as soon as the site is accessed
exports.render = function(req, res) {
    res.sendFile('index.html', {root:  process.env.PWD});
};

// inject a title into the index.ejs template or view, wont be needing in a client server setting
exports.renderEjs = function(req, res) {
	
    res.render('index', {
    	title: 'Howdy World'
    });
};