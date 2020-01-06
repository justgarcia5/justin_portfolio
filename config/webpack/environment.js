const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.append("Provide", webpack.ProvidePlugin({
  $: 'Jquery',
  JQuery: 'Jquery',
  Popper: ['popper.js', 'default']
}))

module.exports = environment
