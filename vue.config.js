module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config.js').webpack,
      symlinks: false
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      less: {
        data: '@import "el-style/variables.less";'
      }
    },
    extract: false
  }
}
