// Modules
import { useRef, useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'
import appWithI18n from 'next-translate/appWithI18n'
// Utils
import { SearchContext } from '../utils/commonFunctions'
// Config
import i18nConfig from '../../i18n'
// Types
import type { MutableRefObject } from 'react'
import type { AppProps } from 'next/app'
import type { ParsedUrlQuery } from 'querystring'
// Styles
import '../styles/globals.scss'
import '../styles/classStyles.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
// nprogress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.VFC = ({ Component, pageProps, router }: AppProps) => {
  // *************** Const *************** //
  const queryClientRef: any = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const [search, setSearch] = useState<string | Array<string>>('')
  const use_router = useRouter()

  useEffect(() => {
    const urlQuery: ParsedUrlQuery = use_router.query
    if (urlQuery && urlQuery.keyword) {
      setSearch(urlQuery.keyword)
    } else {
      setSearch('')
    }
  }, [use_router])

  // *************** JSX *************** //
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <SearchContext.Provider value={{ search, setSearch }}>
            <AnimatePresence exitBeforeEnter initial={false}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </SearchContext.Provider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default appWithI18n(MyApp, {
  ...i18nConfig,
  skipInitialProps: false
})
