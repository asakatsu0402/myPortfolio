// Styles
import '../styles/globals.scss'
import { ThemeProvider } from "next-themes"
// FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"

const MyApp = ({ Component, pageProps }) => {
  // *************** JSX *************** //
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp