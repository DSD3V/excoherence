const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
        test: /\.(jpg|jpeg|JPG)$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'source-map-loader',
        test: /\.js$/,
      },
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
  },
};
