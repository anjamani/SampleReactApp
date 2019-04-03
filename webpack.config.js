const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports= {
    mode: 'development',
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename: './index.js'
    },
   
    module:{
        rules: [
            {
            
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015', 'react', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'to-string-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['to-string-loader','style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
           
        ]
    },

    devServer: {
        host:'0.0.0.0',
        inline: true,
        port: 4000
    },

    plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],

    
}