// Modules
const { locales } = require('./i18n')

module.exports = {
  images: {
    domains: ['images.microcms-assets.io']
  },
  experimental: {
    appDir: true,
  },
  i18n: {
    locales,
    defaultLocale: 'ja',
    localeDetection: false
  }
}
