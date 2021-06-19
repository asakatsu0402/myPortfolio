// Modules
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Components
import { ExternalLink } from "../../atoms/externalLink"
// Config
import { footerShare } from "../../../config/layoutConfig"

export const ShareList = () => {
  // *************** JSX *************** //
  return (
    <ul className="flex justify-between w-20">
      { footerShare.map((share: any, i: number) => (
        <li key={i}>
          <ExternalLink
            link={share.link}
          >
            <FontAwesomeIcon
              icon={share.icon}
            />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}