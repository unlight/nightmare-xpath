var co = require("co");
var Nightmare = require("nightmare");

require("./.."); // xpath function will be added to prototype.

co(function*() {
    yield Nightmare({show: true})
        .viewport(650, 600)
        .goto("http://example.com/")
        .screenshot('./example.com.png')
        .end();
});