/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}

// const webpackConfig = require('./webpack.common')
// const { mergeUserWebpackConfig } = webpackConfig
// const baseConfig = webpackConfig('production')

// /** @type {import('webpack').Configuration} */
// module.exports = mergeUserWebpackConfig('production', baseConfig)
