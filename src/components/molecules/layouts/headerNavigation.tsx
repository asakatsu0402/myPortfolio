// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../../atoms/pageLink'
// Config
import { headerNav } from '../../../config/layoutConfig'

export const HeaderNavigation: React.VFC = () => {
  // *************** Const *************** //
  const { asPath } = useRouter()
  const isPage = asPath.split('/')[1]

  // *************** JSX *************** //
  return (
    <nav className="">
      <ul className="flexBetweenSet">
        {headerNav.map((nav: any, i: number) => (
          <li key={i} className="exceptLeftMargin">
            <PageLink
              className={`
                crimsonText
                ${
                  isPage === nav.link.split('/')[1]
                    ? 'text-crimson font-bold'
                    : ''
                }
              `}
              href={nav.link}
            >
              {nav.title}
            </PageLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
