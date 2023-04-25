'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
// import appWithI18n from 'next-translate/appWithI18n'
import { RecoilRoot } from 'recoil'

// import i18nConfig from '../../../i18n'
import { Layout } from '../../components/templates/Layout/Layout'
import { PageHead } from '../../components/templates/pageHead'
import '../../styles/globals.scss'
import '../../styles/classStyles.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

// TODO 後々改善
// Router.events.on('routeChangeStart', () => NProgress.start())
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="ja">
      <PageHead />

      <body>
        <RecoilRoot>
          <ThemeProvider attribute="class">
            <LazyMotion strict features={domAnimation}>
              <Layout>{children}</Layout>
            </LazyMotion>
          </ThemeProvider>
        </RecoilRoot>
      </body>
    </html>
  )
}

export default RootLayout

// TODO 対応予定
// export default appWithI18n(RootLayout, {
//   ...i18nConfig,
//   skipInitialProps: false
// })
