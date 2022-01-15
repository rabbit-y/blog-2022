const CracoLessPlugin = require('craco-less');
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      '@image': resolve('src/assets/image'),
      '@api': resolve('src/api'),
      '@utils': resolve('src/utils'),
      '@components': resolve('src/components/component'),
      '@pages': resolve('src/components/pages'),
    },
    plugins: [
      //打包分析
      // new BundleAnalyzerPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$/,
        threshold: 10240, // 对超过10k的数据进行压缩
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      })
    ],
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
    }
  ],
};