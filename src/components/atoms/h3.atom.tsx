// Types
import type { FontType } from '../../types/atomTypes'
// Style
import styles from './fonts.module.scss'

export const H3: React.VFC<FontType> = ({
  children,
  className = '',
  bold = false
}: FontType) => {
  return (
    <h3 className={`${styles.h1} ${bold ? styles.bold : ''} ${className}`}>
      {children}
    </h3>
  )
}
