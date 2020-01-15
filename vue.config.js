module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/var.scss"',
      },
      scss: {
        prependData: '@import "~@/assets/css/var.scss";',
      },
    },
  },
};
