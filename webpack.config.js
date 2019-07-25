const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry:{
        app:'./src/index.js',
    } ,
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            // 主文件入口加载类型配置
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 将入口的less编译成css
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 将入口的scss编译成css
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 主文件入口加载类型配置
            {
                test:/\.(jpg|png|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 主文件入口加载类型配置
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: [
                    'file-loader'
                ]
            },
            // 处理HTML中图片
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: false
                    }
                }
            },
            // 处理JS中 es6 => return es5
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,//排除掉node_module目录
                use:{
                    loader:'babel-loader',
                    options:{
                      presets:['env'],//转码规则
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({path:'dist'}),
        new HtmlWebpackPlugin({
            title: 'webpack',　　　// 生成的HTML文件的标题 html中设置权限大于配置
            template: path.resolve(__dirname, 'index.html'),　　// 使用的模板路径
        })
    ]
}