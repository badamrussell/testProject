const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackValidator = require('webpack-validator')
const S3Plugin = require('webpack-s3-plugin')

/*
HtmlWebpackPlugin
creates html files
passes a hash of configuration options
you can customize whatever data you want to send to the template
also certain webpack options are available through (like the compilation hash)
*/

module.exports = {

  devtool: 'source-map',
  entry: './app/index.js',

  output: {
    filename: 'bundle.[hash].js',
    path: './dist/',
  },

  devServer: {
    contentBase: 'static',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['app', 'node_modules']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // cacheDirectory: true,
          // presets: ['es2015', 'react'],
          // env: {
          //   test: {
          //     plugins: [
          //       '__coverage__',
          //     ]
          //   }
          // }
        }
      },
      // {
      //   test: /\.html$/,
      //   loader: 'file-loader?name=[name].[ext]'
      // },
      // {
      //   test: /\.ejs$/,
      //   loader: 'ejs-loader'
      // },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ]
  },

  plugins: [
    // new webpack.NoErrorsPlugin(),
    // new webpack.ProvidePlugin({
    //   'React': 'react',
    //   'ReactDOM': 'react-dom'
    // }),
    new HtmlWebpackPlugin({
      template: './app/templates/index.pug',
      title: 'Backpack Health',
      name: 'stuff'
    }),
    new S3Plugin({
      s3Options: {
        accessKeyId: '',
        secretAccessKey: '',
        region: 'us-east-1',
      },
      s3UploadOptions: {
        Bucket: 'testproject.badrussell',
      },
    })
  ],



}
