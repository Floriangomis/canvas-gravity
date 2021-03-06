const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require("webpack");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'canvas.bundle.js'
    },
    module: {
        loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                },
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                }
        ],
    },
};