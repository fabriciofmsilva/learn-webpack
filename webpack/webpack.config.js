const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
  entry: {
    app: './src/scripts/app.js',
    settings: './src/scripts/settings.js',
    vendor: Object.keys(package.dependencies)
  },
  output: {
    filename: './dist/[name].bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CommonsChunkPlugin({
      name: 'shared',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'app', 'shared'],
      hash: true,
      filename: './dist/index.html',
      template: './src/index.html',
      tilte: 'My Awewome Application',
      myPageHeader: 'Hello World'
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'settings', 'shared'],
      hash: true,
      filename: './dist/settings.html',
      template: './src/index.html',
      tilte: 'My Awewome Application',
      myPageHeader: 'Settings'
    })
  ]
};
