// Modules
import { useRef, useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import NProgress from 'nprogress'
import { AnimatePresence } from 'framer-motion'
// Functions
import { SearchContext } from '../functions/commonFunctions'
// Styles
import '../styles/globals.scss'
import '../styles/classStyles.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
// nprogress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // *************** Const *************** //
  const queryClientRef: any = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const [search, setSearch] = useState<string>('')
  const use_router = useRouter()

  useEffect(() => {
    const urlQuery: any = use_router.query
    if (urlQuery && urlQuery.keyword) {
      setSearch(urlQuery.keyword)
    } else {
      setSearch('')
    }
  }, [use_router])

  // *************** JSX *************** //
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider attribute="class">
        <SearchContext.Provider value={{ search, setSearch }}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </SearchContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
