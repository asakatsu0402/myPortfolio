// Modules
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
// Components
import { Title } from "../components/atoms/title"
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
      <Title />
      <nav>
        <ul
          className={`${styles.header_nav}
            flex 
          `}
        >
          { headerNav.map((nav: any, i: number) => (
            <li
              key={i}
              className={ isPage === nav.link.split('/')[1]
                ? 'text-red-800 font-bold' : ''
              }
            >
              <Link
                href={nav.link}
              >
                { nav.title }
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}