// Modules
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

// *************** Type *************** //
type Props = {
  data: Array<any>
}

export const TableContents: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <ul>
      { props.data.map((list: any, i: number) => (
        <li
          key={i}
        >
          <AnchorLink href={`#${list.id}`}>
            {list.text}
          </AnchorLink>
        </li>
      ))}
    </ul>
  )
}