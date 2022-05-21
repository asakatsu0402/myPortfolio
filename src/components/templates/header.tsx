// Modules
import React from 'react'
import { useRouter } from 'next/router'
// Components
import { PageLink } from '../atoms/PageLink.atom'
import { Text } from '../atoms/Text.atom'
import { HeaderNavigation } from './headerNavigation'
import { LanguageButton } from '../molecules/languageButton'
// Style
import styles from './header.module.scss'

export const Header: React.VFC = () => {
  // *************** Const *************** //
  const { pathname } = useRouter()

  // *************** JSX *************** //
  return (
    <header className={styles.header}>
      <PageLink
        className={`
          ${styles.linkText}
          ${pathname === '/' ? styles.active : ''}
        `}
        href="/"
      >
        <Text text="asakatsu" />
      </PageLink>
      <HeaderNavigation />
      <LanguageButton />
    </header>
  )
}
