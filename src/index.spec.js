const Nightmare = require('nightmare');
const assert = require('assert');

require('.')(Nightmare);

it('function exists', function () {
    assert.strictEqual(typeof Nightmare.prototype.xpath, 'function');
});

it('test example', async () => {
    var links = await Nightmare()
        .goto('http://example.com/')
        .xpath('//a[@href]', function (node) {
            // We cannot return DOM element to nodejs,
            // we must return serializable object or primitive.
            // If function is omitted, node.toString() will be used.
            return {
                href: node.href,
                innerText: node.textContent,
            };
        })
        .then();
    assert.strictEqual(links.length, 1);
    assert.deepStrictEqual(links, [
        {
            href: 'https://www.iana.org/domains/example',
            innerText: 'More information...',
        },
    ]);
});
