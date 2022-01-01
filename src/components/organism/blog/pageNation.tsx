// Modules
import React from "react"
// Components
import { PageLink } from "../../atoms/pageLink"

// *************** Type *************** //
type Props = {
  data?: any
  total?: number
}

export const PageNation: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const perPage = 5
  const range = (start: any, end: any) => [...Array(end - start + 1)]
  .map((_, i) => start + i)

  // *************** JSX *************** //
  return (
    <ul className="flex">
      { range(1, Math.ceil(props.total/perPage))
      .map((number: any, i: number) => (
        <li key={i}>
          <PageLink
            className="inline-block py-2 px-4 rounded-lg bg-crimson"
            href={`/blog/page/${number}`}
            text={number}
          />
        </li>
      ))}
    </ul>
  )
}