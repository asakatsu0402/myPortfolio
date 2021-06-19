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
    <div className="flex flex-col justify-between h-full">
      <Header />
      <div
        className={`${className}
          flex flex-grow overflow-y-scroll min-h-0 h-full w-full
        `}
      >
        { children }
      </div>
      <Footer />
    </div>
  )
}