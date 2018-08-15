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
      title: 'Multi Loader'
    })
  ],
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          path.resolve(__dirname, 'multi-loader-3.js'),
          path.resolve(__dirname, 'multi-loader-2.js'),
          path.resolve(__dirname, 'multi-loader-1.js')
        ]
      }
    ]
  }
};
