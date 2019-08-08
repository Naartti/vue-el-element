const path = require('path')
function resolveSrc (_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@': 'src',
  'el-style': 'src/style',
  'script': 'src/script',
  'elements': 'src/components/elements',
  'showCase': 'src/components/showCase',
  'docs': 'src/docs'
}

module.exports = {
  webpack: {},
  jest: {}
}

Object.entries(aliases).forEach(([alias, route]) => {
  module.exports.webpack[alias] = resolveSrc(route)
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${route}/$1`
})
