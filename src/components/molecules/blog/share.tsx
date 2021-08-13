// Modules
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLine,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
// Components
import { ExternalLink } from '../../atoms/externalLink'
// Interfaces
import { ShareType } from '../../../interfaces/molecules/blogInterfaces'
// Config
import { baseUrl } from '../../../config/commonConfig'

export const Share: React.VFC<ShareType> = ({ id, title }: ShareType) => {
  // *************** JSX *************** //
  const shareList = [
    {
      className: 'twitterButton',
      icon: faTwitter,
      link: `https://twitter.com/intent/tweet?text=${title}&url=${baseUrl}/${id}/&hashtags=microcms`
    },
    {
      className: 'facebookButton',
      icon: faFacebook,
      link: `https://www.facebook.com/sharer.php?u=${baseUrl}/${id}/`
    },
    {
      className: 'hatenaButton',
      icon: faTwitter,
      link: `https://b.hatena.ne.jp/entry/${baseUrl}/${id}/`
    },
    {
      className: 'lineButton',
      icon: faLine,
      link: `https://b.hatena.ne.jp/entry/${baseUrl}/${id}/`
    }
  ]

  return (
    <ul className="sticky top-5 h-full">
      {shareList.map((list: any, i: number) => (
        <li key={i}>
          <ExternalLink
            className={`inline-block px-2 py-1 ${list.className}`}
            link={list.link}
            target={true}
          >
            <FontAwesomeIcon icon={list.icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
