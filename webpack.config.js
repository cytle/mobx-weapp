const path = require('path');

module.exports = {
    entry: {
        'main.js': path.resolve(__dirname, './src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name]',
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    performance: {
        hints: false
    },
    devtool: '#inline-source-map'
}
