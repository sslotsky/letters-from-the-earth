
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    js: './index.js'
  },
  output: { path: __dirname + '/assets', filename: 'bundle.js' },
  devtool: "#cheap-module-source-map",
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  }
}
