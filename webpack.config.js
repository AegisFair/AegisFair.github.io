const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(), //explicitly CWD
    entry: { common: "./src/js/common.js" },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "inline-source-map",
    devServer: {
        index: 'index.html',
        contentBase: path.resolve()
    },
    resolve: {
        modules: ['node_modules'],
    },
    module: {
        rules: [
            /*{
                test: /.jsx?$/,
                use: {
                    loader: 'babel-loader',

                }
            },*/
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/'
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/'
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name:'[name].[ext]'
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}