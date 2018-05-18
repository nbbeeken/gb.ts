//@ts-check
const path = require("path");

module.exports = {

    context: path.resolve(__dirname, 'src'),

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: false,
        port: 8080,
        index: "index.html",
    },

    entry: "./app.ts",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader",
                options: { fix: true },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public", "js"),
        publicPath: '/js/'
    },
};
