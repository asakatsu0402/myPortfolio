// Modules
import React from "react"
import { Link as Scroll } from 'react-scroll'

// *************** Type *************** //
type Props = {
  data: Array<any>
}

export const TableContents: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <ul className="mt-5 p-5 rounded-md bg-crimson">
      { props.data.map((list: any, i: number) => (
        <li
          key={i}
          className="py-1 border-b-2"
        >
          <Scroll
            className="before:content-['-'] before:block"
            to={list.id}
          >
            {list.text}
          </Scroll>
        </li>
      ))}
    </ul>
  )
}