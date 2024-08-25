/** @type {import('next').NextConfig} */

const path = require('path');
module.exports = (webpackConfig, { dev, isServer }) => {
  // Use file-loader to handle mp3 files
  webpackConfig.module.rules.push({
    test: /\.(png|jpe?g|gif|mp3)$/i,
    use: {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/',
        outputPath: 'static/',
        name: '[path].[name].[ext]',
      },
    },
  });

  return webpackConfig;
};

module.exports = {
  reactStrictMode: false,
}
