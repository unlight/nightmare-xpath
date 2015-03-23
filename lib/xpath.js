module.exports = function(xpath) {
	var result = [];
	var xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	var item;
	while (item = xpathResult.iterateNext()) {
		result.push(item);
	}
	return result;
};