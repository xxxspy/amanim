const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        example1: './examples/01/index.js',
        // example2: './examples/02/index.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },

    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
    rules: [
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: "src/statics", to: "statics" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "examples/01", "index.html"),
            filename: 'example01.html',
            chunks: ['example1'],
            inject: false,
        }),
        // new HtmlWebpackPlugin({
        //   // inject: false,
        //   template: path.resolve(__dirname, "examples/02", "index.html"),
        //   filename: 'example02.html',
        //   chunks: ['example2'],
        // }),
    ]
};