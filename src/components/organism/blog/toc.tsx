// Modules
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
// Types
import type { toc } from '../../../types/organism/blogInterfaces'

export const Toc: React.VFC<toc> = ({ toc }: toc) => {
  // *************** JSX *************** //
  return (
    <ul className="mt-5 p-5 rounded-md bg-crimson">
      {toc.map((item, i) => (
        <li key={i} className="py-1 border-b-2">
          <ScrollLink
            className="block cursor-pointer"
            to={item.id}
            offset={50}
            // spy={true}
            // smooth={true}
            // offset={50}
            // duration={500}
          >
            - {item.text}
          </ScrollLink>
        </li>
      ))}
    </ul>
  )
}
