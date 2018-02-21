const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('../package.json');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        vendor: Object.keys(package.dependencies)
    },
    output: {
        filename: './dist/[name].bundle.js'
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/index.html',
            template: './src/index.html',
            tilte: 'My Awewome Application',
            myPageHeader: 'Hello World'
        })
    ]
};
