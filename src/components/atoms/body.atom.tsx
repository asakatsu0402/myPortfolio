// Types
import type { FontType } from '../../types/atomTypes'
// Style
import styles from './fonts.module.scss'

export const Body: React.VFC<FontType> = ({
  children,
  className = '',
  bold = false
}: FontType) => {
  return (
    <p className={`${styles.body} ${bold ? styles.bold : ''} ${className}`}>
      {children}
    </p>
  )
}
