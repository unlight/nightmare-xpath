const action = require('./action');

module.exports = function (Nightmare) {
    Nightmare.action('xpath', action);
};
