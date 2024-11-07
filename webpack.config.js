const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point for the JavaScript
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js'                 
    },
    mode: 'development',       
    module: {
        rules: [
            {
                test: /\.css$/,               
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource' // Automatically handles images as files
            },
            {
                test: /\.html$/,             // Add this rule for HTML files
                use: 'html-loader'           // Use html-loader for .html files
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), 
        hot: true, // Enable Hot Module Replacement
        open: true, // Automatically opens the browser
        port: 9000                             
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'      // Path to your main HTML template
        })
    ],
};
