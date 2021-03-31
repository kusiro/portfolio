module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/main.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
        .loader('file-loader')
        .end()
  }
};