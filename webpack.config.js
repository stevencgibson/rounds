const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'src/static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.resolve(__dirname, 'src'),
      loader: ['babel-loader']
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/static'),
    compress: true,
    open: true
  }
};