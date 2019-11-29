module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/mixins/_breakpoints.scss";`
      }
    }
  },
  runtimeCompiler: true
}
