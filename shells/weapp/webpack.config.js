const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './src/main.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: '#inline-source-map',
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.vue']
  }
}
