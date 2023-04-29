import { DarkModeButton } from '../../atoms/DarkModeButton/DarkModeButton'
import { ShareList } from '../ShareList'

import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}
