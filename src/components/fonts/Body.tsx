import clsx from 'clsx'

import styles from './Fonts.module.scss'

import type { FontType } from './type'

export const Body: React.FC<FontType> = ({ children, className = '', fontSize, bold = false }: FontType) => {
  return (
    <p
      className={clsx([
        styles.body,
        fontSize ? styles[fontSize] : '',
        bold ? styles.bold : '',
        className
      ])}
    >
      {children}
    </p>
  )
}
