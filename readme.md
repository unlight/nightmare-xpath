nightmare-xpath
---------------
Nightmare plugin to select nodes by xpath expression.

```js
var Nightmare = require("nightmare");
require("nightmare-xpath"); // xpath function will be added to prototype.

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
```