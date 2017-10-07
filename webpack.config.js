
var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    js: './index.js'
  },
  output: { path: __dirname, filename: 'bundle.js' },
  devtool: "#eval-source-map",
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_BASE': JSON.stringify('http://localhost:9999/v1')
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    }),
    new webpack.EnvironmentPlugin(['CAPTCHA_KEY'])
  ]
}
