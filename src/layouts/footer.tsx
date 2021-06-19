// Modules
import React from "react"
// Components
import { ShareList } from "../components/molecules/layouts/shareList"
// Styles
import styles from '../styles/layout.module.scss'
import { DarkModeButton } from "../components/molecules/common/darkModeButton"

export const Footer = () => {
  // *************** JSX *************** //
  return (
    <footer
      className={`${styles.footer}
        flex justify-between p-4
      `}
    >
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}