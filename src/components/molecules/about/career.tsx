// Modules
import React, {
  ReactChild
} from "react"
// Components
import { ExternalLink } from "../../atoms/externalLink"
// Config
import { careerList } from "../../../config/aboutConfig"

// *************** Type *************** //
type Props = {

}

export const Career: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <ul>
      { careerList.map((list: any, i: number) => (
        <li
          key={i}
          className=""
        >
          <p>
            {list.start} ~ { list.end && list.end }
          </p>
          <ExternalLink
            className="text-crimson font-bold"
            link={list.link}
            text={list.title}
          />
        </li>
      ))}
    </ul>
  )
}