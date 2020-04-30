const config = {}
let presets = ['@vue/app']

if (process.env.NODE_ENV === 'production') {
  presets = ['@babel/preset-env', ['minify', {
    keepFnName: true,
    keepClassName: true
  }]]
  config.comments = false
}

config.presets = presets

module.exports = config
