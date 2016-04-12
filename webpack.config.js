var path = require('path');

var webpackConfig = {
    context: __dirname + path.sep + 'scripts',
    entry: "./app.js",
    output: {
        path: __dirname + "/dist/todoApp/js",
        filename: "bundle.js"
    },
    resolve: {root: [__dirname + path.sep + 'scripts']},
    watch: true,
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader"}
        ]
    }
};

module.exports = webpackConfig;