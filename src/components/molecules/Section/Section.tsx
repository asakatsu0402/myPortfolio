import type { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'

type Props = {
  children?: ReactNode
  className?: string | undefined
  key?: number | string | undefined
  title?: string | undefined
}

export const Section: React.FC<Props> = ({ className, title, children }: Props) => (
  <section className={clsx([styles.section, className])}>
    <h2 className="text-3xl">{title}</h2>
    {children}
  </section>
)
