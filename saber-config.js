module.exports = {
  build: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        additionalData: `
          @import "@/styles/variables";
          @import "@/styles/mixins";
        `,
      },
    },
  },
};
