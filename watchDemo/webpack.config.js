const path = require('path');
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        app:"./src/main.js"
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    watch:true,
    watchOptions:{
        ignored: /node_modules/
    },
    plugins: [
        new htmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
   ],
};

