// Modules
import React, {
  ReactChild
} from "react"

// *************** Type *************** //
type Props = {
  className?: string
  title: string
  children?: ReactChild
}

export const AsideSection: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <section className={`${props.className} pt-5`}>
      <h3
        className="px-2 py-1 rounded bg-crimson text-white font-bold"
      >
        {props.title}
      </h3>
      {props.children}
    </section>
  )
}