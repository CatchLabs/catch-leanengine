var path = require('path');
var projectRoot = path.resolve(path.dirname(__filename), '../..');

function cloudRequire(modulePath) {
    return require(path.join(projectRoot, modulePath));
}

module.exports = {
    require: cloudRequire,
    AV: cloudRequire('cloud/ng/engine')
};