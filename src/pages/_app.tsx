// Modules
import {
  useRef,
  useState
} from "react"
import {
  QueryClient,
  QueryClientProvider
} from "react-query"
import { AppProps } from "next/app"
// Functions
import { SearchContext } from "../functions/commonFunctions"
// Styles
import '../styles/globals.scss'
import { ThemeProvider } from "next-themes"
// FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"

const MyApp = ({
  Component,
  pageProps
}: AppProps) => {
  // *************** Const *************** //
  const queryClientRef: any = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const [search, setSearch] = useState<string>('')

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