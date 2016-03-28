var path = require('path');

var webpackConfig = {
    context: __dirname + "/todoApp/app",
    entry: "./app.js",
    output: {
        path: __dirname + "/dist/todoApp/js",
        filename: "bundle.js"
    },
    resolve: {
        root: ['./']
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader"}
        ]
    }
};

module.exports = webpackConfig;