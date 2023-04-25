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
    autodocs: true
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
};