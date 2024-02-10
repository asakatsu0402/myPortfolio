import '../src/styles/globals.scss'

export const parameters = {
  nextjs: {
    appDirectory: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
  }
}