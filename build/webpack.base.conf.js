const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const vueConf = require('./vue-loader.conf')
const projectRoot = path.resolve(__dirname, '../');

const config = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    // vendor: [
    //   'es6-promise',
    //   'vue',
    //   'vue-router',
    //   'vuex',
    //   'vuex-router-sync'
    // ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
    filename: '[name].[chunkhash:5].js',
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components'),
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConf
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: []
}

if (process.env.NODE_ENV !== 'production') {
  config.plugins = []
  return module.exports = config
}


config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
)

module.exports = config