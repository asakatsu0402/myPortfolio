// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../../atoms/pageLink'
// Config
import { headerNav } from '../../../config/layoutConfig'

export const HeaderNavigation: React.VFC = () => {
  // *************** Const *************** //
  const { pathname } = useRouter()

  // *************** JSX *************** //
  return (
    <nav>
      <ul className="flexBetweenSet">
        {headerNav.map((nav: any, i: number) => (
          <li key={i} className="exceptLeftMargin">
            <PageLink
              className={`
                crimsonText
                ${pathname === nav.link ? 'text-crimson' : 'nonActiveText'}
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
