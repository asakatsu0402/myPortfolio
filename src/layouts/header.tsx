// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../components/atoms/pageLink'
import { HeaderNavigation } from '../components/molecules/layouts/headerNavigation'

export const Header: React.VFC = () => {
  // *************** Const *************** //
  const { pathname } = useRouter()

  // *************** JSX *************** //
  return (
    <header className="flexBetweenSet h-16 p-4">
      <PageLink
        className={`
          crimsonText
          ${pathname === '/' ? 'text-crimson' : 'nonActiveText'}
        `}
        href="/"
        text="asakatsu"
      />
      <HeaderNavigation />
    </header>
  )
}
