var path = require("path");

module.exports = {
    entry: {
        main: ['./app/client/main.js']
    },
    output: {
        path: path.resolve(__dirname, "./app/server/public/build"),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']

                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(png|jpg|bmp)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(otf|woff|woff2)(\?.+)$/,
                loader: 'url?limit=8192'
            }
        ]
    }
};
