var dirname = require('path').dirname;
var phantomjs = require('phantomjs-bin');

var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};

new Nightmare(options)
	.goto('http://google.com')
	.wait()