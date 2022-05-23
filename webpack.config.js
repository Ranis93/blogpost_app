const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  target: 'web',
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })],
  resolve: {
    extensions: ['.js']
  }
};