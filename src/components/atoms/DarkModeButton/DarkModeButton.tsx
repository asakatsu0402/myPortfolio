'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Button } from '../Button/Button'
import { FontAwesome } from '../FontAwesome.atom'

import styles from './DarkModeButton.module.scss'

export const DarkModeButton = (): JSX.Element => {
  const { theme, setTheme } = useTheme()
  const [rendered, setRendered] = useState<boolean>(false)

  useEffect(() => setRendered(true), [])

  const handleToggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <Button
      className={clsx([styles.darkModeButton, theme === 'dark' ? 'whiteButton' : 'blackButton'])}
      type="button"
      functions={handleToggleTheme}
    >
      {rendered && theme === 'dark' ? (
        <FontAwesome icon={['fas', 'sun']} />
      ) : (
        <FontAwesome icon={['fas', 'moon']} />
      )}
    </Button>
  )
}
