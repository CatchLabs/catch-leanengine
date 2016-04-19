var path = require('path');
var projectRoot = path.resolve(path.dirname(__filename), '..');

function cloudRequire(path) {
    return require(path.join(projectRoot, path));
}

module.exports = {
    require: cloudRequire,
    AV: cloudRequire('cloud/ng/engine')
};