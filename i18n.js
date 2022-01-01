module.exports = {
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  currentPagesDir: './src/pages',
  finalPagesDir: './src/utils',
  localesPath: './public/locales',
  loader: false,
  pages: {
    '*': ['common'],
    '/': ['top']
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default)
}
