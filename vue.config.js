const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['.dailysport.tn', 'dailysport.tn', 'www.dailysport.tn'],
  }
})

