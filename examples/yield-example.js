var co = require("co");
var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};
require("./.."); // xpath function will be added to prototype.

co(function*() {
	var links = yield Nightmare(options)
		.goto("http://example.com/")
		.xpath("//a[@href]")
		.end();
	console.log("Found %d links:", links.length);
	console.log(links);
}).catch(function(err) {
	console.error(err);
});