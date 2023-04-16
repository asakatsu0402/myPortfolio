'use client'

import clsx from 'clsx'
import { useRouter } from 'next/router'

import { PageLink } from '../atoms/PageLink.atom'
import { Text } from '../atoms/Text.atom'
import { LanguageButton } from '../molecules/languageButton'

import styles from './header.module.scss'
import { HeaderNavigation } from './headerNavigation'

export const Header = (): JSX.Element => {
  const { pathname } = useRouter()

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
