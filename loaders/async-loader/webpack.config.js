const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Async Loader'
    })
  ],
  module: {
    rules: [
      {
        test: /test-1\.txt$/,
        loader: path.resolve(__dirname, 'async-loader.js')
      },
      {
        test: /test-2\.txt$/,
        loader: path.resolve(__dirname, 'sync-loader.js')
      }
    ]
  }
};
