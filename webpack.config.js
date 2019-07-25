const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:{
        app:'./src/index.js',
        abc: ['./src/script/a.js','./src/script/b.js','./src/script/c.js'],
    } ,
    output: {
        filename: "[name].main.js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|svg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({path:'dist'}),
        new HtmlWebpackPlugin({
            title: 'webpack',　　　// 生成的HTML文件的标题
            template: path.resolve(__dirname, 'index.html')　　// 使用的模板路径
        })
    ]
}