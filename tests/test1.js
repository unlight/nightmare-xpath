var Nightmare = require("nightmare");
var dirname = require("path").dirname;
var phantomjs = require("phantomjs-bin");
var options = {
	phantomPath: dirname(phantomjs.path) + "/"
};
var plugin = require("./../");
var test = require('tape');

test('example test 1', function (t) {
	new Nightmare(options)
		.goto("http://example.com/")
		.xpath("//a[@href]", function(result) {
			t.equal(result.length, 1);
			t.equal(result[0].href, "http://www.iana.org/domains/example");
		})
		.run(function(err, nightmare) {
			if (err) throw err;
			t.end();
		});
});