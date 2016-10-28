var co = require("co");
var Nightmare = require("nightmare");

require("./.."); // xpath function will be added to prototype.

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