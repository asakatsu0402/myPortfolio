// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../components/atoms/pageLink'
import { HeaderNavigation } from '../components/molecules/layouts/headerNavigation'

export const Header: React.VFC = () => {
  // *************** Const *************** //
  const { asPath } = useRouter()

  // *************** JSX *************** //
  return (
    <header className="flexBetweenSet h-16 p-4">
      <PageLink
        className={`
          crimsonText 
          ${asPath === '/' ? 'text-crimson font-bold' : ''}
        `}
        href="/"
        text="asakatsu"
      />
      <HeaderNavigation />
      {/*<nav>*/}
      {/*  <ul*/}
      {/*    className={`${styles.header_nav}*/}
      {/*      flex */}
      {/*    `}*/}
      {/*  >*/}
      {/*    { headerNav.map((nav: any, i: number) => (*/}
      {/*      <li key={i}>*/}
      {/*        <PageLink*/}
      {/*          className={ isPage === nav.link.split('/')[1]*/}
      {/*            ? 'text-crimson font-bold' : ''*/}
      {/*          }*/}
      {/*          href={nav.link}*/}
      {/*        >*/}
      {/*          { nav.title }*/}
      {/*        </PageLink>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</nav>*/}
    </header>
  )
}
