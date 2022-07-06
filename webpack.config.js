const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve("build"),
        filename: "main.js",
    },

    target: "web",
    devServer: {
        port: "3000",

        static: ["./public"],

        open: true,

        hot: true,

        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],   
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: [
                    path.resolve("src/img/html")
                ],
                loader: 'file-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              }
        ]
    }
}