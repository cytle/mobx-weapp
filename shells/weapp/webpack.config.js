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
entry.vendor = ["mobx"]

const distPath = path.resolve(__dirname, 'dist')
const nodeModulesPath = path.join(__dirname, '../../node_modules')
const srcPath = path.join(__dirname, '../../src')
module.exports = {
  entry,
  output: {
    path: distPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(distPath, './*')),
    new CopyWebpackPlugin([
      { from: 'src/pages', to: 'pages' },
      { from: 'src/app.json', to: './' },
      { from: 'src/app.wxss', to: './' }
    ], { ignore: ['*.js'] }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      // minChunks: function(module, count) {
      //   // any required modules inside node_modules are extracted to vendor
      //   return module.resource &&
      //     /\.js$/.test(module.resource) &&
      //     (
      //       module.resource.indexOf(nodeModulesPath) === 0 ||
      //       module.resource.indexOf(srcPath) === 0
      //     )
      // },
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
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
