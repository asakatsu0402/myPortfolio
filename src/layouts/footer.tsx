// Modules
import React from "react"
// Components
import { ShareList } from "../components/molecules/layouts/shareList"
// Styles
import styles from '../styles/layout.module.scss'

export const Footer = () => {
  // *************** JSX *************** //
  return (
    <footer
      className={`${styles.footer}
        h-16 p-4
      `}
    >
      <ShareList />
    </footer>
  )
}