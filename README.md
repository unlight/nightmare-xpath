# nightmare-xpath

Nightmare plugin to select nodes by xpath expression.

## INSTALL

This will install plugin `nightmare-xpath` for Nightmare 3.X:

```sh
npm install --save-dev nightmare-xpath
```

**Note:** If you are looking for plugin for Nightmare 1.X, then use:

```sh
npm install nightmare-xpath@1
```

## USAGE

```js
const Nightmare = require('nightmare');
require('nightmare-xpath')(Nightmare);

const links = await Nightmare()
    .goto('http://example.com/')
    .xpath('//a[@href]', function (node) {
        // We cannot return DOM element to nodejs,
        // we must return serializable object or primitive.
        // If function is omitted, node.toString() will be used.
        return node.href;
    })
    .then();

console.log(links); // ['https://www.iana.org/domains/example']
```

## API

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

## RESOURCES

-   https://developer.mozilla.org/ru/docs/Web/API/Document/evaluate
