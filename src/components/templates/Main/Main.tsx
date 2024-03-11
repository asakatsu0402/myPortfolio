'use client'

import clsx from 'clsx'
import styles from './Main.module.scss'

type Props = {
  children: React.ReactNode
  isNoSpace?: boolean
}

export const Main: React.FC<Props> = ({ children, isNoSpace }) => {
  const isNoSpacing = isNoSpace ? styles.noSpace : ''

  return (
    <main className={clsx([styles.main, isNoSpacing])}>
      <div className={clsx([styles.contents, isNoSpacing])}>
        {children}
      </div>
    </main>
  )
}
