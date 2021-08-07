// Modules
import React from 'react'
// Components
import { ExternalLink } from '../../atoms/externalLink'
// Config
import { careerList } from '../../../config/aboutConfig'

export const Career: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <ul>
      {careerList.map((list: any, i: number) => (
        <li key={i} className="">
          <p>
            {list.start} ~ {list.end && list.end}
          </p>
          <ExternalLink
            className="text-crimson font-bold"
            link={list.link}
            text={list.title}
            target={true}
          />
        </li>
      ))}
    </ul>
  )
}
