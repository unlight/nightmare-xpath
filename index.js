var Nightmare = require("nightmare");
var library = require("./lib");

Nightmare.prototype.xpath = function() {
	var fn = function(xpath, callback, done) {
		this.page.evaluate(library.xpath, function(result) {
			callback(result);
			done();
		}, xpath);
	};
	var args = [].slice.call(arguments);
	this.queue.push([fn, args]);
	return this;
};