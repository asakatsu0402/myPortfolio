// Modules
import React, {
  ReactNode
} from "react"
// Components
import { DarkModeButton } from "../components/molecules/common/darkModeButton"
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
      <DarkModeButton />
      <Header />
      <div
        className={`${className}
          flex min-h-0 h-full
        `}
      >
        { children }
      </div>
      <Footer />
    </div>
  )
}