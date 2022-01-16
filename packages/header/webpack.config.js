const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;
console.log("MiniCssExtractPlugin", MiniCssExtractPlugin)
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = {
    mode:"development",
    //our index file
    entry: path.resolve(__dirname, "src/index.js"),
    //Where we put the production code
    output: {
        // path: path.resolve(__dirname, "dist"),
        // filename: "[name].js",
        publicPath: "auto",
    },
    // This says to webpack that we are in development mode and write the code in webpack file in different way
    mode: "development",
    module: {
        rules: [
            //Allows use javascript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            //Allows use of CSS
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            //Allows use of images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'app2',
            library: { type: 'var', name: 'app2' },
            filename: 'remoteEntry.js',
            exposes: {
                "./Header": "./src/Header",
                "./BaseCounter": "./src/BaseCounter",
                "./Button": "./src/Button",
                './newReact': require.resolve('react'),
                './newReactDOM': require.resolve('react-dom'),
            },
            shared:[
                "react-dom",
                {
                    react: {
                        import: 'react', // the "react" package will be used a provided and fallback module
                        shareKey: 'newReact', // under this name the shared module will be placed in the share scope
                        shareScope: 'default', // share scope with this name will be used
                        // singleton: true, // only a single version of the shared module is allowed
                    },
                }
            ]
        }),
        //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
        }),
        //This get all our css and put in a unique file
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    //Config for webpack-dev-server module
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        hot: true,
        port: 8081,
    },
};