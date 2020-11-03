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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[folder]/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                optimizationLevel: 2,
                                enabled:false
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}