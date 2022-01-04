const CracoLessPlugin = require('craco-less');
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    webpack: {
        alias: {
          '@': resolve('src'),
          '@image': resolve('src/assets/image'),
          '@api': resolve('src/api'),
          '@utils': resolve('src/utils'),
          '@pages': resolve('src/components/pages'),
        }
      },
      plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
};