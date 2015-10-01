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
		.goto("http://example.com/")
		.xpath("//a[@href]")
		.end(function(err, result) {
			t.equal(result.length, 1);
			t.equal(result[0], "http://www.iana.org/domains/example");
			t.end();
		});
});