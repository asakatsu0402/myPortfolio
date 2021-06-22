// Modules
import React from "react"
// Share Buttons
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
  LineShareButton,
  LineIcon
} from "react-share"

// *************** Type *************** //
type Props = {
  title?: string
}

export const ArticleShare: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <ul className="sticky top-5 h-full">
      <li>
        <TwitterShareButton
          url=""
          title={props.title}
        >
          <TwitterIcon
            size={35}
            round
          />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton
          url=""
          title={props.title}
        >
          <FacebookIcon
            size={35}
            round
          />
        </FacebookShareButton>
      </li>
      <li>
        <HatenaShareButton
          url=""
          title={props.title}
        >
          <HatenaIcon
            size={35}
            round
          />
        </HatenaShareButton>
      </li>
      <li>
        <LineShareButton
          url=""
          title={props.title}
        >
          <LineIcon
            size={35}
            round
          />
        </LineShareButton>
      </li>
    </ul>
  )
}