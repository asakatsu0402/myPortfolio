// Modules
import type { ReactChild } from 'react'
import React from 'react'

type Props = {
  children?: ReactChild
  className?: string
  title: string
}

export const AsideSection: React.VFC<Props> = (props: Props) => {
  return (
    <section className={`${props.className} pt-5`}>
      <h3 className="px-2 py-1 rounded bg-crimson text-white font-bold">{props.title}</h3>
      {props.children}
    </section>
  )
}
