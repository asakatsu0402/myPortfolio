// Modules
import React, {
  ReactNode
} from "react"
import Link from "next/link"
// Config
import { footerNav } from "../config/layoutConfig"
// Styles
// import styles from '../styles/layout.module.scss'

// *************** Type *************** //


export const Footer = () => {
  // *************** JSX *************** //
  return (
    <footer
      // className={styles.header}
    >
      <nav>
        <ul>
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
    </footer>
  )
}