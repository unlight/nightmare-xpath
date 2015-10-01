nightmare-xpath
---------------
Nightmare plugin to select nodes by xpath expression.

INSTALL
-------
This will install plugin `nightmare-xpath` for Nightmare 2.X:
```sh
npm install --save nightmare-xpath
```
**Note:** If you are looking for plugin for Nightmare 1.X, then use:
```sh
npm install nightmare-xpath@1
```

USAGE
-----
```js
var co = require("co");
var Nightmare = require("nightmare");
require("nightmare-xpath"); // xpath function will be added to prototype.

co(function*() {
	var links = yield Nightmare()
		.goto("http://example.com/")
		.xpath("//a[@href]", function(node) {
			// We cannot return DOM element to nodejs, 
			// we must return serializable object or primitive.
			// If function is omitted, node.toString() will be used.
			return {
				href: node.href,
				innerText: node.innerText
			};
		})
		.end();
	console.log("Found %d links:", links.length);
	console.log(links);
});
```

API
---
`xpath(selector: string, handler?: (Node: node) => any): Array<any>`

#### selector
Type: `string`

XPath expression.

#### handler
Type: `function`  
Optional: Yes  
Signature: `(Node: node) => any`

This function be called on each result of `XPathResult`.
We cannot return DOM element to nodejs, 
we must return serializable object or primitive.
If function is omitted, node.toString() will be used.


RESOURCES
---------
* https://developer.mozilla.org/ru/docs/Web/API/Document/evaluate