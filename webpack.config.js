const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/,use: [MiniCssExtractPlugin.loader, "css-loader"]},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            { test:/\.html$/, use:'html-loader'},
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname,'./src/assets'),
                    to: 'assets' }
            ],
        }),
    ]
}