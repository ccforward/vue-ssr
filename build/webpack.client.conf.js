const base = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // inject: process.env.NODE_ENV !== 'production' ? 'body' : false,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      environment: process.env.NODE_ENV
    }),
    new ExtractTextPlugin('styles.[hash:5].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
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