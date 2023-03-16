// Modules
import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Button } from '../atoms/Button.atom'
import { FontAwesome } from '../atoms/FontAwesome.atom'

import styles from './DarkModeButton.module.scss'

export const DarkModeButton: React.VFC = () => {
  // *************** Const *************** //
  const { theme, setTheme } = useTheme()
  const [rendered, setRendered] = useState<boolean>(false)

  // *************** Functions *************** //
  useEffect(() => setRendered(true), [])

  const handleToggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  // *************** JSX *************** //
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
