import React from 'react'
import type { NextPage } from 'next'
import styles from './fonts.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
  bold?: boolean
}
const Small: NextPage<Props> = ({
  children,
  className = '',
  bold = false
}: Props) => {
  return (
    <p
      className={`${String(styles.small)} ${
        bold ? styles._bold : ''
      } ${className}`}
    >
      {children}
    </p>
  )
}

export default Small
