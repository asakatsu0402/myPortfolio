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
  className?: string
}

export const Layout = ({
  children,
  className
}: Props) => {
  // *************** JSX *************** //
  return (
    <div>
      <Header />
      <main className={`main ${className}`}>
        { children }
      </main>
      <Footer />
    </div>
  )
}