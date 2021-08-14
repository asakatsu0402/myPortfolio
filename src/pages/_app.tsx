// Modules
import { useRef, useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
// Functions
import { SearchContext } from '../functions/commonFunctions'
// Styles
import '../styles/globals.scss'
import '../styles/classStyles.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
// nprogress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  // *************** Const *************** //
  const queryClientRef: any = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const urlQuery: any = router.query
    if (urlQuery && urlQuery.keyword) {
      setSearch(urlQuery.keyword)
    } else {
      setSearch('')
    }
  }, [router])

  // *************** JSX *************** //
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ThemeProvider attribute="class">
        <SearchContext.Provider value={{ search, setSearch }}>
          <Component {...pageProps} />
        </SearchContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
