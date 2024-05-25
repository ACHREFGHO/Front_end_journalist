const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['dailysport.tn', 'www.dailysport.tn'],
    disableHostCheck: true, // Disable host check to resolve the "Invalid Host Header" issue
  }
})
