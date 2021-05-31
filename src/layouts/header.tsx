// Modules
import React, {
  ReactNode
} from "react"
import Link from "next/link"
// Config
import { headerNav } from "../config/layoutConfig"
// Styles
// import styles from '../styles/layout.module.scss'

// *************** Type *************** //


export const Header = () => {
  // *************** JSX *************** //
  return (
    <header
      // className={styles.header}
    >
      <nav>
        <ul>
          { headerNav.map((nav: any, i: number) => (
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
    </header>
  )
}