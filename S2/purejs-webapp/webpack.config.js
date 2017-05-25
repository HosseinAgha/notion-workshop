var path = require('path');
var WebpackErrorNotificationPlugin =  require('webpack-error-notification');

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style!css?module&sourceMap&localIdentName=[path]_[name]_[local]_[hash:base64:3]!stylus"}
    ]
  },
  plugins: [
    new WebpackErrorNotificationPlugin()
  //   new webpack.HotModuleReplacementPlugin()
  ],
  // module: {
  //   loaders: [{
  //     test: /\.js$/,
  //     loaders: ['react-hot', 'babel'],
  //     include: path.join(__dirname, 'src')
  //   }]
  // }
};
