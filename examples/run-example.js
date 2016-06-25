// Example for Nightmare 1.X
var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};
require("./.."); // xpath function will be added to prototype.

Nightmare(options)
	.goto("http://example.com/")
	.evaluate(function() {
		// throw new Error('Err!');
		return document.title;
	})
	.end()
	.then(result => {
		console.log('result', result);
	})
	.catch(err => {
		console.log('err ', err);
	});