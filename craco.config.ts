const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@image': resolve('src/assets/image'),
      '@api': resolve('src/api'),
      '@utils': resolve('src/utils'),
      '@components': resolve('src/components'),
      '@pages': resolve('src/pages'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@h-color': '#74759b',
              '@h-font-color': '#333',
              '@h-border-color': '#d9d9d9',
              '@h-border-radius': '10px',
              '@h-hight': 'calc(100vh - 60px)',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
