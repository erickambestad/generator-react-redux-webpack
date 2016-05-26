var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      "./src/js/app.js" // Your appʼs entry point
    ],
    output: {
        path: "htdocs/",
        publicPath: "http://localhost:8080/",
        filename: "./js/app.js"
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-2,presets[]=react'],
            include: __dirname
          }
        ]
    }
};
