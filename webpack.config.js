const path = require("path");
module.exports = {
    entry: `./src/index.js`,
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    },
devServer:{
    contentBase: path.join(__dirname,"dist"),
    port: 3000,
    watchContentBase: true
    },
module: {
    rules: [{
    test: /\.css$/, //what loaders should be applied
    use: [{loader: "style-loader/url"},
    {loader: "file-loader",
    options: {name: "[name].[ext]"}}] //what loaders we want to use
    }]
    }
}