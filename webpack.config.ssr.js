var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: {
    js: './index.js',
    vendor: [
      'axios',
      'react',
      'react-dom',
      'react-recaptcha',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-form',
      'redux-resolver',
      'redux-thunk',
      'styled-components',
      'validate-this'
    ]
  },
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  devtool: "#cheap-module-source-map",
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_BASE': JSON.stringify('http://localhost:9999/v1')
    }),
    new webpack.EnvironmentPlugin(['CAPTCHA_KEY'])
  ]
}
