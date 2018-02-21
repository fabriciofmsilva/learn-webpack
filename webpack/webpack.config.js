const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
  entry: {
    vendor: Object.keys(package.dependencies),
    app: './src/scripts/app.js',
    settings: './src/scripts/settings.js'
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // Convert images < 8kb to base64 strings
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 9000
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CommonsChunkPlugin({
      name: 'shared',
      minChunks: 2
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      } 
    ]), 
    new ExtractTextPlugin({
      filename: 'app.bundle.css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      chunks: ['vendor', 'shared', 'app'],
      path: path.join(__dirname, "../dist/"),
      filename: 'index.html' 
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Settings',
      template: './src/index.html',
      chunks: ['vendor', 'shared', 'settings'],
      path: path.join(__dirname, "../dist/"),
      filename: 'settings.html'
    })
  ]
};
