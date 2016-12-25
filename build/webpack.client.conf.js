const base = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const vueConfig = require('./vue-loader.conf')
const webpack = require('webpack')


const config = Object.assign({}, base, {
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HTMLPlugin({
      template: 'src/index.template.html',
      inject: process.env.NODE_ENV !== 'production' ? 'body' : false,
      minify: {
        collapseWhitespace: true
      },
      environment: process.env.NODE_ENV
    }),
    new ExtractTextPlugin('styles.[hash:5].css')
  ])
})

if (process.env.NODE_ENV !== 'production') {
  return module.exports = config
}

vueConfig.loaders = {
  stylus: ExtractTextPlugin.extract({
    loader: "css-loader!stylus-loader!sass-loader",
    fallbackLoader: "vue-style-loader" // <- this is a dep of vue-loader
  })
}

module.exports = config