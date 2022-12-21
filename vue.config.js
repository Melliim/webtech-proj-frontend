const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/webtech-proj-frontend/'
}
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: '3000'
  }
}
