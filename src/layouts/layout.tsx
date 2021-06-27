// Modules
import React, {
  ReactNode
} from "react"
// Components
import { PageHead } from "./pageHead"
import { Header } from "./header"
import { Footer } from "./footer"

// *************** Type *************** //
type Props = {
  children?: ReactNode
  className?: string
  title?: string
}

export const Layout = ({
  children,
  className,
  title
}: Props) => {
  // *************** JSX *************** //
  return (
    <div className="flex flex-col justify-between h-full">
      <PageHead
        title={title}
      />
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