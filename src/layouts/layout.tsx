// Modules
import React, {
  ReactNode
} from "react"
// Components
import { Header } from "./header"
import { Footer } from "./footer"

// *************** Type *************** //
type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  // *************** JSX *************** //
  return (
    <div>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}