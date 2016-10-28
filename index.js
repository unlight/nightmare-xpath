var Nightmare = require("nightmare");

function documentXpath(selector, handler) {
	var node;
	var result = [];
	var xpathResult = document.evaluate(selector, document, null, XPathResult.ANY_TYPE, null);
	while (node = xpathResult.iterateNext()) {
		var item = handler(node);
		result.push(item);
	}
	return result;
}

function serialize() {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		if ("function" === typeof args[i]) {
			args[i] = args[i].toString();
		}
	}
	var result = JSON.stringify(args);
	return result;
}

function action(selector, handler, done) {
	this.evaluate_now(function remoteExec(serializedArgs) {
		var args = JSON.parse(serializedArgs);
		var documentXpath = new Function("return " + args[0])();
		var selector = args[1];
		var handler = new Function("return " + args[2])();
		var result = documentXpath(selector, handler);
		return result;
	}, done, serialize(documentXpath, selector, handler));
}

/**
 * Plugin function.
 * @param  {string} selector  XPath selector.
 * @param  {function?} handler  map function which will be applied for founded node element.
 * @return {Nightmare} If case yield returns array.
 */
Nightmare.prototype.xpath = function(selector, handler) {
	if (typeof handler !== "function") {
		handler = function(node) {
			return node.toString();
		};
	}
	var args = [selector, handler];
	this.queue().push([action, args]);
	return this;
}