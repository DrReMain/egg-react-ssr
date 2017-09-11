const path = require('path');
const webpack = require('webpack');
const assetsPlugin = require('assets-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './indexPage',
    test: './testPage',
  },
  context: path.resolve(__dirname, '../../client'),
  output: {
    filename: '[name].js',
    hashDigestLength: 7,
    path: path.resolve(__dirname, '../../app/public'),
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new assetsPlugin({
      filename: 'assets.json',
      path: 'app/public',
    }),
    new extractTextPlugin({
      filename: '[name].css'
    }),
  ]
};

