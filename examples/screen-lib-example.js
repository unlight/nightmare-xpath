var co = require("co");
var Nightmare = require("nightmare");

require("./.."); // xpath function will be added to prototype.

co(function*() {
    var n = Nightmare({show: false});
    yield n
        // .viewport(650, 600)
        .goto("http://example.com/")
        .screenshot('./example.com.png')
        .end();
});

co(function*() {
    var n = Nightmare({show: !false, width: 800});
    var clip = yield n
        // .viewport(800, 600)
        .goto('https://www.google.ru')
        .wait(1000)
        .evaluate(() => {
            var h1 = document.querySelector('#hplogo');
            var [rect] = h1.getClientRects();
            return {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.width,
            };
        })
        .then(function(rect) {
            var clip = {x: ~~rect.left, y: ~~rect.top, width: ~~rect.width, height: ~~(rect.bottom - rect.top)};
            console.log("clip", clip);
            return n
                .screenshot('./glogo.png', clip)
                .wait(1000)
                .end();
        });
}).catch(err => {
    console.log('err', err);
});
