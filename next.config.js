// Modules
const { locales } = require('./i18n')

module.exports = {
  images: {
    domains: ['images.microcms-assets.io']
  },
  i18n: {
    locales,
    defaultLocale: 'ja',
    localeDetection: false
  }
}
