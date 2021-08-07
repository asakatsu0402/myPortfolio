// Modules
import React from 'react'
// Components
import { PageHead } from './pageHead'
import { Header } from './header'
import { Footer } from './footer'
// Interfaces
import { LayoutType } from '../interfaces/molecules/molecules'

export const Layout = ({ children, className, title, flex }: LayoutType) => {
  // *************** JSX *************** //
  return (
    <div className="flex flex-col justify-between h-full">
      <PageHead title={title} />
      <Header />
      <div
        className={`
          overflow-y-scroll ${className}
          ${flex ? 'flex flex-grow min-h-0 h-full w-full' : ''}
        `}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}
