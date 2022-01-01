// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../atoms/pageLink'
import { Text } from '../atoms/text'
// Config
import { headerNav } from '../../config/layoutConfig'
// Style
import styles from './headerNavigation.module.scss'

export const HeaderNavigation: React.VFC = () => {
  // *************** Const *************** //
  const { pathname } = useRouter()

  // *************** JSX *************** //
  return (
    <nav>
      <ul className={styles.navigationList}>
        {headerNav.map((nav, i) => (
          <li key={i} className="exceptLeftMargin">
            <PageLink
              className={`
                ${styles.linkText}
                ${pathname === nav.link ? styles.active : ''}
              `}
              href={nav.link}
            >
              <Text text={nav.title} />
            </PageLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
