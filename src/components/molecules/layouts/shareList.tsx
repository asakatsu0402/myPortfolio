// Modules
import React from "react"
// Components
import { ExternalLink } from "../../atoms/externalLink"

export const ShareList = () => {
  // *************** JSX *************** //
  return (
    <ul>
      <li>
        <ExternalLink
          link="https://github.com/asakatsu0402"
        >
          <p>Github</p>
        </ExternalLink>
      </li>
    </ul>
  )
}