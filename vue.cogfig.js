module.exports={
  publicPath:"./",
   devServer: {
       historyApiFallback: true,
       disableHostCheck: true,
       noInfo: true,
       port:80,
    },
  //   configureWebpack:{
  //      externals: {
  //         'vue-router':'VueRouter',
  //         axios: 'axios',
  //      }
  //    },
       productionSourceMap: false
}