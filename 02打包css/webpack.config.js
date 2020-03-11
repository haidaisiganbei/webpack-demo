
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:resolve(__dirname,"build"),
        filename:"js/built.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[ 'style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options:{
                    limit: 8*1024,
                    name:'[hash:10].[ext]',
                    esModule:false,
                    outputPath:'imgs'
                }
            },
            {
                // 负责见html中的图片资源引入
                test:/\.html/,
                loader: 'html-loader'
            }
        ],
    },
    plugins:[
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            })
    ],
    
    
    mode:"development",
    devServer:{
        contentBase: resolve(__dirname,'build'),
        compress:true,
        port:3000,
        open:true
    }
}