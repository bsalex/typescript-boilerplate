const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: '../src/app.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|png|gif|jpg|jpeg)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.jpg', '.jpeg', '.png', '.gif']
    },

    devtool: 'source-map',
    context: __dirname,
    target: 'web',
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        compress: false,
        historyApiFallback: false,
        hot: true,
        overlay: true
    },

    plugins: [new HtmlWebpackPlugin()]
};
