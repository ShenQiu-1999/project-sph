const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api':''},//重新路径去掉前缀 这里不需要
      }
    }
  },
})
