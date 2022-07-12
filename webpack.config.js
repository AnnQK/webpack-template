const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin =require( "html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
mode: 'development',
    entry: ["@babel/polyfill",'./src/index.jsx'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        assetModuleFilename: 'assets/images/[name].[ext]',
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module:{
    rules:[
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },{
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

        },
        // {
        //     test: /\.(png|svg|jpg|jpeg)$/,
        //     use: ['file-loader']
        // },
        {
            test: /\.html$/,
            use: ['html-loader'],
        }
    ]
    }


}