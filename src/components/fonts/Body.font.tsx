import type { VFC } from 'react'

import styles from './fonts.module.scss'

import type { FontType } from '../../types/atomTypes'

export const Body: VFC<FontType> = ({ children, className = '', bold = false }: FontType) => {
  return <p className={`${styles.body} ${bold ? styles.bold : ''} ${className}`}>{children}</p>
}
