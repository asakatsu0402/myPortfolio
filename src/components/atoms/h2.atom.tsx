// Types
import type { FontType } from '../../types/atomTypes'
// Style
import styles from './fonts.module.scss'

export const H2: React.VFC<FontType> = ({
  children,
  className = '',
  bold = false
}: FontType) => {
  return (
    <h2 className={`${styles.h2} ${bold ? styles.bold : ''} ${className}`}>
      {children}
    </h2>
  )
}
