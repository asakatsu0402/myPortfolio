// Modules
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Components
import { ExternalLink } from '../../atoms/externalLink'
// Config
import { footerShare } from '../../../config/layoutConfig'

export const ShareList = () => {
  // *************** JSX *************** //
  return (
    <ul className="flexBetweenSet w-36">
      {footerShare.map((share: any, i: number) => (
        <li key={i}>
          <ExternalLink className="crimsonText" link={share.link} target={true}>
            <FontAwesomeIcon icon={share.icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
