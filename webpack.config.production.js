
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    js: './index.js',
    vendor: [
      'axios',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-form',
      'redux-resolver',
      'redux-thunk',
      'validate-this'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[hash:6].js'
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle-[hash:6].js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        CAPTCHA_KEY: JSON.stringify(process.env.CAPTCHA_KEY)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  ]
}
