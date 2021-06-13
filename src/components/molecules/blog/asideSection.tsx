// Modules
import React, {
  ReactChild
} from "react"

// *************** Type *************** //
type Props = {
  title: string
  children?: ReactChild
}

export const AsideSection: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <section>
      <h3 className="px-2 py-1 rounded bg-red-900 text-white font-bold">
        {props.title}
      </h3>
      {props.children}
    </section>
  )
}