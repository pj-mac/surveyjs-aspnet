const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        site: ["./wwwroot/js/index.js"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "wwwroot/dist")
    },
    watchOptions: {
        ignored: ["node_modules", "dist"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src/js"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    // Extracts CSS into separate files, one CSS file per JS file.
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                ]
            }
        ]
    },
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                // Puts vendor scripts and styles (from node_modules folder) in separate vendor.js and vendor.css files.
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    priority: 1,
                    // Optional: Setting enforce to true for this demo to always generate vendor.css.
                    // Otherwise, splitchunks.cacheGroups is ignored in production mode if the new chunk is less than the size of 30KB.
                    enforce: true
                }
            }
        }
    },
    plugins: [
        // Extracts CSS into separate files, one CSS file per JS file.
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
};