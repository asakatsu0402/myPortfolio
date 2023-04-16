import styles from './fonts.module.scss'

import type { FontType } from '../../types/atomTypes'

export const H1: React.VFC<FontType> = ({ children, className = '', bold = false }: FontType) => {
  return <h1 className={`${styles.h1} ${bold ? styles.bold : ''} ${className}`}>{children}</h1>
}
