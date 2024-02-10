import clsx from 'clsx'

import styles from './Fonts.module.scss'

import type { FontType } from './type'

export const H3: React.FC<FontType> = ({ children, className = '', bold = false }: FontType) => {
  return <h3 className={clsx([styles.h1, bold ? styles.bold : '', className])}>{children}</h3>
}
