// Modules
import React from "react"
// Components
import { ExternalLink } from "../../atoms/externalLink"
// Config
import { worksList } from "../../../config/worksConfig"

export const WorksList: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <ul>
      { worksList.map((work: any, i: number) => (
        <li
          key={i}
          className="bg-red-700 bg-opacity-90 text-center"
        >
          <ExternalLink
            className="block p-5"
            link={work.link}
          >
            <p className="font-bold text-xl">
              {work.label}
            </p>
            <p className="mt-2">{work.category}</p>
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}