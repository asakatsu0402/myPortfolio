import type { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './Section.module.scss'
import { H2 } from '@/components/fonts/H2'

type Props = {
  children?: ReactNode
  className?: string | undefined
  key?: number | string | undefined
  title?: string | undefined
}

export const Section: React.FC<Props> = ({ className, title, children }: Props) => (
  <section className={clsx([styles.section, className])}>
    <H2>{title}</H2>

    {children}
  </section>
)
