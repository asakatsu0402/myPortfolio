// Modules
import React from "react"
import { useRouter } from "next/router"
// Components
import { PageLink } from "../components/atoms/pageLink"
// Config
import { headerNav } from "../config/layoutConfig"
// Styles
import styles from '../styles/layout.module.scss'

export const Header: React.VFC = () => {
  // *************** Const *************** //
  const router = useRouter()
  const path = router.asPath
  const isPage = path.split('/')[1]

  // *************** JSX *************** //
  return (
    <header
      className={`${styles.header}
        flex justify-between items-center h-16 p-4
      `}
    >
      <PageLink
        className={ path === '/' ? 'text-crimson font-bold' : '' }
        href="/"
        text="asakatsu"
      />
      <nav>
        <ul
          className={`${styles.header_nav}
            flex 
          `}
        >
          { headerNav.map((nav: any, i: number) => (
            <li key={i}>
              <PageLink
                className={ isPage === nav.link.split('/')[1]
                  ? 'text-crimson font-bold' : ''
                }
                href={nav.link}
              >
                { nav.title }
              </PageLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}