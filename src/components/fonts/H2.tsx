import clsx from 'clsx'

import styles from './Fonts.module.scss'

import type { FontType } from './type'

export const H2: React.FC<FontType> = ({ children, className = '', bold = false }: FontType) => {
  return <h2 className={clsx([styles.h2, bold ? styles.bold : '', className])}>{children}</h2>
}
