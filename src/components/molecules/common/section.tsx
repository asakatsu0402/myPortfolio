// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  className?: any
  title
  children?: ReactNode
}

export const Section: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <section
      className={`${props.className}
        w-2/3 m-auto 
        md:flex md:justify-between md:w-4/5
      `}
    >
      <h2 className="font-bold text-3xl">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}