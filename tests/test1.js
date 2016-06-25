var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};
var plugin = require("./../");
var test = require("tape");

test("example test 1", function(t) {

	Nightmare(options)
		.evaluate(function(helloFn) {
			// We are in browser
			helloFn();
		}, function() { // Function defined in node
			console.log("hello");
		});

});