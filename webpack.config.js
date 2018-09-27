const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules|dist/,
      use: 'babel-loader',
    }, {
      test: /\.(styl|stylus)$/,
      use: [{
        loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      }, {
        loader: 'css-loader',
        options: { sourceMap: !isProduction },
      }, {
        loader: 'stylus-loader',
        options: {
          sourceMap: !isProduction,
        },
      },
        // {
        //   loader: 'style-loader',
        //   options: {
        //     // Provide path to the file with resources
        //     resources: './src/assets/styles/_resources.styl',
        //   },
        // },
      ],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        name: 'img/[name].[ext]',
      },
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        mimetype: 'application/font-woff',
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        mimetype: 'application/font-woff',
        name: 'fonts/[name].[ext]',
      },
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        mimetype: 'application/octet-stream',
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      query: {
        limit: '10000',
        mimetype: 'application/vnd.ms-fontobject',
        name: 'fonts/[name].[ext]',
      },
    },
    ],
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Sandbox',
      filename: 'index.html',
      chunks: ['main'],
      template: './src/assets/templates/index.html',
      inject: true,
    }),
  ],
};
