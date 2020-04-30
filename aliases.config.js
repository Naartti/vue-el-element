const path = require('path')
function resolveSrc (_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@': 'src',
  'el-style': 'src/components/~el-style',
  '~el-style': 'src/components/~el-style',
  'script': 'src/script',
  'elements': 'src/components/elements',
  'showCase': 'src/components/showCase',
  'docs': 'src/docs'
}

module.exports = {
  rollup: [],
  webpack: {},
  jest: {}
}

Object.entries(aliases).forEach(([alias, route]) => {
  module.exports.webpack[alias] = resolveSrc(route)

  // Jest throws error for "~"-routes
  if (route.indexOf('~') === -1) {
    module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${route}/$1`
  }

  // Temporary fix for less import alias in rollup resulting in "~"-routes
  module.exports.rollup.push({
    find: alias,
    replacement: path.resolve(__dirname, route)
  })
})
