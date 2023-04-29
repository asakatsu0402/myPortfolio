// TODO 削除よてい

import { useState, useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import appWithI18n from 'next-translate/appWithI18n'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { RecoilRoot } from 'recoil'

import i18nConfig from '../../i18n'
import { SearchContext } from '../utils/commonFunctions'

import type { AppProps } from 'next/app'
import type { ParsedUrlQuery } from 'querystring'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC = ({ Component, pageProps, router }: AppProps) => {
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

  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        <SearchContext.Provider value={{ search: String(search), setSearch }}>
          <AnimatePresence initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </SearchContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default appWithI18n(MyApp, {
  ...i18nConfig,
  skipInitialProps: false
})
