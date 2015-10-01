var Nightmare = require("nightmare");
var plugin = require("./../");
var test = require("tape");

test("function exists", function (t) {
	t.equal(typeof Nightmare.prototype.xpath, "function");
	t.end();
});