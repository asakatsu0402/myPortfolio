import clsx from 'clsx'

import styles from './fonts.module.scss'

import type { FontType } from './type'

export const Body: React.FC<FontType> = ({ children, className = '', bold = false }: FontType) => {
  return <p className={clsx([styles.body, bold ? styles.bold : '', className])}>{children}</p>
}
