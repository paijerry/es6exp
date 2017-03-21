module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: '/Users/jerry/es6/build', // `output.path` needs to be an absolute path or `/`.
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}
