// Search Folders
const children = require.context('.', true, /\.\/[^/]+\/index\.js$/)
children.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = children(key).default
})


// Search Nested Folders
const granchildren = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)
granchildren.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = granchildren(key).default
})