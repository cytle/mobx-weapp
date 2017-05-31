const path = require('path')

module.exports = {
  entry: {
    'main.js': path.resolve(__dirname, './src/main.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name]',
    publicPath: '/assets/',
  },
  plugins: [],
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
