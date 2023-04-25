'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { PageLink } from '../../atoms/PageLink.atom'
import { Text } from '../../atoms/Text.atom'
import { LanguageButton } from '../../atoms/LanguagesButton/LanguageButton'
import { HeaderNavigation } from '../HeaderNavigation'

import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <PageLink className={clsx([styles.linkText, pathname === '/' ? styles.active : ''])} href="/">
        <Text text="asakatsu" />
      </PageLink>

      <HeaderNavigation />

      <LanguageButton />
    </header>
  )
}
