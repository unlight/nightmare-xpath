var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};
require("./"); // xpath function will be added to prototype.

new Nightmare(options)
	.goto("http://example.com/")
	.xpath("//a[@href]", function(result) {
		console.log("Found %d links:", result.length);
		result.forEach(function(a) {
			console.log(a.href);
		});
	})
	.run(function(err, nightmare) {
		if (err) throw err;
	});