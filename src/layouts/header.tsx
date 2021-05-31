// Modules
import React from "react"
import Link from "next/link"
// Components
import { Title } from "../components/atoms/title"
// Config
import { headerNav } from "../config/layoutConfig"
// Styles
import styles from '../styles/layout.module.scss'

export const Header: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <header className={styles.header}>
      <Title />
      <nav>
        <ul className={styles.header_nav}>
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