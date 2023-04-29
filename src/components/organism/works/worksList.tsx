// Modules
import React from 'react'
// Components
import { PageLink } from '../../atoms/PageLink/PageLink'
// import { ExternalLink } from '../../atoms/externalLink'
// Config
import { worksList } from '../../../config/worksConfig'

export const WorksList: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <ul className="w-full">
      {worksList.map((work: any, i: number) => (
        <li key={i} className="exceptTopMargin bg-crimson bg-opacity-90 text-center">
          <PageLink className="block p-5" href={work.link}>
            <p className="font-bold text-xl">{work.label}</p>
            <p className="mt-2">{work.category}</p>
          </PageLink>
          {/*<ExternalLink className="block p-5" link={work.link} target={true}>*/}
          {/*  <p className="font-bold text-xl">{work.label}</p>*/}
          {/*  <p className="mt-2">{work.category}</p>*/}
          {/*</ExternalLink>*/}
        </li>
      ))}
    </ul>
  )
}
