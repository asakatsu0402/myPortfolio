import React from 'react'
import type { NextPage } from 'next'
import styles from './fonts.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
  bold?: boolean
}
const Subtitle: NextPage<Props> = ({ children, className = '', bold = false }: Props) => {
  return (
    <p className={`${String(styles.subtitle)} ${bold ? styles._bold : ''} ${className}`}>
      {children}
    </p>
  )
}

export default Subtitle
