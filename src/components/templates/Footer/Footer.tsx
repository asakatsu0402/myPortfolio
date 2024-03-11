import { Body } from '@/components/fonts/Body'
import { DarkModeButton } from '../../atoms/DarkModeButton/DarkModeButton'
import { ShareList } from '../ShareList'

import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <ShareList />

      <div>
        <Body>
          <span>© {year} </span>
          <span>Katsuya Asakura</span>
        </Body>
      </div>

      <DarkModeButton />
    </footer>
  )
}
