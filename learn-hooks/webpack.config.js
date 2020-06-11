const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename:'bundle[hash:7].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: '/\.jsx?$/',
        use: ['babel-loader'],
        exclude: /node_module/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/layout/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000
  }
};