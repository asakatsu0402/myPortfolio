'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { headerNav } from '../../../config/layoutConfig'
import { PageLink } from '../../atoms/PageLink/PageLink'
import { Text } from '../../atoms/Text/Text'

import styles from './HeaderNavigation.module.scss'

export const HeaderNavigation = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.navigationList}>
        {headerNav.map((nav, i) => (
          <li key={i} className="exceptLeftMargin">
            <PageLink
              className={clsx([styles.linkText, pathname === nav.link ? styles.active : ''])}
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
