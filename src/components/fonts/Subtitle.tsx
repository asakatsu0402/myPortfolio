import clsx from 'clsx'

import styles from './Fonts.module.scss'

import type { FontType } from './type'

export const Subtitle: React.FC<FontType> = ({
  children,
  className = '',
  bold = false
}: FontType) => {
  return <p className={clsx([styles.subtitle, bold ? styles._bold : '', className])}>{children}</p>
}
