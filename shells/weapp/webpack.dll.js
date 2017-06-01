const webpack = require('webpack')
const path = require('path')
const distPath = path.resolve(__dirname, 'src/lib')
const ss = path.resolve(__dirname, 'src/lib/mobx.manifest.json')

module.exports = {
  entry: {
    mobx: 'mobx'
  },
  output: {
    path: distPath,
    filename: '[name].js',
    library: '[name]_library',
    libraryTarget: 'commonjs2'
  },
  plugins: [new webpack.DllPlugin({path: ss, name: '[name]_library'})],
  target: 'node'
}
