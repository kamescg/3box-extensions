"use strict";

// Search Folders
var children = require.context('.', true, /\.\/[^/]+\/index\.jsx$/);

console.log(children, 'asdasdasd');
children.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1');
  module.exports[componentName] = children(key)["default"];
}); // Search Nested Folders

var granchildren = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.jsx$/);

console.log(granchildren, 'granchildren');
granchildren.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1');
  module.exports[componentName] = granchildren(key)["default"];
});
module.exports.kames = {
  boss: true
};