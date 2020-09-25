function documentXpath(selector, handler) {
    let node;
    const result = [];
    const xpathResult = document.evaluate(selector, document, null, XPathResult.ANY_TYPE, null);
    while ((node = xpathResult.iterateNext())) {
        var item = handler(node);
        result.push(item);
    }
    return result;
}

function serialize() {
    const args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        if ('function' === typeof args[i]) {
            args[i] = args[i].toString();
        }
    }
    const result = JSON.stringify(args);
    return result;
}

module.exports = function xpath(selector, handler, done) {
    this.evaluate_now(
        function remoteExec(serializedArgs) {
            const args = JSON.parse(serializedArgs);
            const documentXpath = new Function('return ' + args[0])();
            const selector = args[1];
            const handler = new Function('return ' + args[2])();
            const result = documentXpath(selector, handler);
            return result;
        },
        done,
        serialize(documentXpath, selector, handler),
    );
};
