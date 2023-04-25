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
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    return config
  }
}