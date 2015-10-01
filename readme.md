nightmare-xpath
---------------
Nightmare plugin to select nodes by xpath expression.

INSTALL
-------
This will install plugin `nightmare-xpath` for Nightmare 2.X:
```sh
npm install --save nightmare-xpath
```
**Note:** If you are looking plugin for Nightmare 1.X, use then:
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
			// We can not return DOM element to nodejs, 
			// we must return serializable object or primitive.
			// If fucntion omitted, node.toString() will be used.
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