// Modules
import React from "react"
// Components
import { ExternalLink } from "../../atoms/externalLink"
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
// Interfaces
import { ShareType } from "../../../interfaces/molecules/blogInterfaces"
// Config
import { baseUrl } from "../../../config/commonConfig"

export const Share: React.VFC<ShareType> = ({
  id,
  title
}: ShareType) => {
  // *************** JSX *************** //
  const twitterLink = `https://twitter.com/intent/tweet?text=${title}&url=${baseUrl}/${id}/&hashtags=microcms`;
  return (
    <ul className="sticky top-5 h-full">
      <li>
        {/* <ExternalLink
          link={twitterLink}
          target={true}
        >
          <p>twitter</p>
        </ExternalLink> */}
        <TwitterShareButton
          url={twitterLink}
          title={title}
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
          title={title}
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
          title={title}
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
          title={title}
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