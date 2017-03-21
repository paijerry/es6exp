var HtmlWebpackPlugin = require('html-webpack-plugin') // html hot load plugin

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
            }, {
                test: /\.css$/, // Only .css files
                loader: 'style-loader!css-loader' // Run both loaders
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './src',
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // html hot load template
        })
    ]
}
