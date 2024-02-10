const path = require('path')

module.exports = {
  "stories": ["../src/components/**/*.stories.@(mdx|tsx)"],
  "addons": [{
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }, "@storybook/addon-links", "@storybook/addon-essentials"],
  docs: {
    autodocs: false
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    }
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ]
    return config
  }
}