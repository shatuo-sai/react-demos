var webpack = require('webpack');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var port = "8081";


module.exports = {
    //页面入口文件配置
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:' + port,
        './src/pages/hello-world/index.jsx'
    ],
    //入口文件输出配置
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        
    },
    devServer: {
        contentBase: './dist',
        color: true,
        port: port
    },
    //插件项
    plugins: [
        commonsPlugin,
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: 'src/pages/hello-world/index.html',
            inject: false
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:' + port
        })
    ]
};