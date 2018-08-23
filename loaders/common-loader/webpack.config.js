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
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'Loader Example'
    })
  ],
  module: {
    rules: [
     
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          path.resolve(__dirname, 'test-loader.js'),
          {
            loader: 'file-loader',
            options: {
              name: 'demo.[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // path.resolve(__dirname, 'test-loader.js'),
          'less-loader',
          path.resolve(__dirname, 'test2-loader.js'),
        ]
      },
    ]
  }
};
