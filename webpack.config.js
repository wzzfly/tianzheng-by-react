var path = require('path');
var webpack = require('webpack');
//css文件提取器需要的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test:'/\.(png|jpg|woff|woff2)$/',
                loader:'url-loader?limit=8192'     //自动将低于8192bit的图片变成base64
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // new OpenBrowserPlugin({    
        //     url: 'http://localhost:8080'
        // })
    ]


};