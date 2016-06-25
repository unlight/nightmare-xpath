var co = require("co");
var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	// show: true,
	// phantomPath: dirname(phantomjs.path) + "/"
};
require("./.."); // xpath function will be added to prototype.

co(function*() {
	var selector = 'h1';
	var text = yield Nightmare(options)
		.goto("http://example.com/")
		.evaluate(function(selector) {
			// now we're executing inside the browser scope.
			return document.querySelector(selector).innerText;
		}, selector) // <-- that's how you pass parameters from Node scope to browser scope
		.end()
	console.log(text);
}).catch(function(err) {
	console.log(err);
});