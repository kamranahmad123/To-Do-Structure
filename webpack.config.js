const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
  },
  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: './dist',
  },
  plugins: [

    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html'),
      },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};