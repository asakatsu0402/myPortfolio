// Modules
import React, {
  ReactNode
} from "react"
import Link from "next/link"
// Components
import { ShareList } from "../components/molecules/layouts/shareList"
// Config
import { footerNav } from "../config/layoutConfig"
// Styles
import styles from '../styles/layout.module.scss'

export const Footer = () => {
  // *************** JSX *************** //
  return (
    <footer
      className={`${styles.footer}
        p-5 bg-black text-white
      `}
    >
      <nav>
        <ul className={styles.navList}>
          { footerNav.map((nav: any, i: number) => (
            <li
              key={i}
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
      <ShareList />
    </footer>
  )
}