const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
        test: /\.less$/,
        use: [
          path.resolve(__dirname, 'style-loader.js'),
          path.resolve(__dirname, 'css-loader.js'),
          path.resolve(__dirname, 'less-loader.js')
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.less$/,
      //   loader: 'less-loader'
      // }

      // {
      //   test: /\.less$/,
      //   use: [
      //     path.resolve(__dirname, 'test-loader.js')
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     path.resolve(__dirname, 'test2-loader.js')
      //   ]
      // },
    ]
  }
};
