const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WebpackDevServer = require('webpack-dev-server');


const config = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   use: {
      //     loader: 'ts-loader',
      //   },
      //   exclude: /node_modules/,
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,

   static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/',
  },

  headers: { 'Access-Control-Allow-Origin': '*' },

  proxy: {
    '/api/**': {
      target: 'http://localhost:3000',
      secure: false,
    },
  },
  watchFiles: ['client'],
},

};

module.exports = config;