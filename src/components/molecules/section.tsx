import type { VFC, ReactNode } from 'react'

import clsx from 'clsx'

type Props = {
  className?: string | undefined
  key?: number | string | undefined
  title?: string | undefined
  children?: ReactNode
}

export const Section: VFC<Props> = ({ className, title, children }: Props) => (
  // *************** JSX *************** //
  <section className={clsx(['exceptTopSection', className])}>
    <h2 className="text-3xl">{title}</h2>
    {children}
  </section>
)
