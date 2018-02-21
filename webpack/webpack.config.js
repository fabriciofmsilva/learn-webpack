const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: './dist/app.bundle.js'
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
