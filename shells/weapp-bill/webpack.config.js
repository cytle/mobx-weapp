const path = require('path')
const alias = require('../alias')
const webpack = require('webpack')

module.exports = {
  entry: {
    logic: path.resolve(__dirname, 'logic.js')
  },
  output: {
    path: path.resolve(__dirname, 'src/lib'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"dev"'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: false
  },
  // devtool: '#inline-source-map',
  resolve: {
    alias,
    extensions: ['.json', '.js']
  },
  target: 'web'
}
