const path = require('path')
const webpack = require('webpack')
const app = require('./src/app.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const alias = require('../alias')

const entry = app.pages.reduce(function(p, vo) {
  p[vo] = './src/' + vo + '.js'
  return p
}, {})

entry.app = './src/app.js'

const distPath = path.resolve(__dirname, 'dist')
const srcPath = path.resolve(__dirname, 'src')
module.exports = {
  entry,
  output: {
    path: distPath,
    filename: '[name].js',
    // libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(distPath, './*')),
    new CopyWebpackPlugin([
      { from: 'src/pages', to: 'pages' },
      { from: 'src/app.json', to: './' },
      { from: 'src/app.wxss', to: './' }
    ], { ignore: ['*.js'] })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // })
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
  target: 'node'
}
