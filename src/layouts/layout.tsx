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
    <div className="flex flex-col h-full">
      <Header />
      <main
        className={`main ${className}
          flex flex-col flex-grow min-h-0 h-full
        `}
      >
        { children }
      </main>
      <Footer />
    </div>
  )
}