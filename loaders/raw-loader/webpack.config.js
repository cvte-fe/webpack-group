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
      title: 'One Loader'
    })
  ],
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: path.resolve(__dirname, 'name-loader.js'),
        options: {
          name: 'world'
        }
      }
    ]
  }
};
