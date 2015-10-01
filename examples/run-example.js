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
	.xpath("//a[@href]", function(node) {
		// We can not return DOM element to nodejs, 
		// we must return serializable object or primitive.
		return {
			href: node.href,
			innerText: node.innerText
		};
	})
	.end(function(err, result) {
		if (err) throw err;
		console.log("Found %d links:", result.length);
		console.log(result);
	});