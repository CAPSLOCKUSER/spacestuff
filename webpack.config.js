/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var version = require('./package.json').version;
var PROD = JSON.parse(process.env.PRODUCTION || '0');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './build',
    filename: 'game.js',
    publicPath: 'build/',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jade$/,
        loader: 'raw!jade-html'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
    ],
    postLoaders: [
      {
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'transform?brfs'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: "'" + version + "'",
      __BUILD_DATE__: "'" + new Date() + "'"
    })
  ].concat(PROD ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })] : [])
};
