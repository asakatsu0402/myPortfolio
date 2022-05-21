// Modules
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// Components
import { Button } from '../atoms/Button.atom'
import { FontAwesome } from '../atoms/FontAwesome.atom'

export const DarkModeButton: React.VFC = () => {
  // *************** Const *************** //
  const { theme, setTheme } = useTheme()
  const [rendered, setRendered] = useState<boolean>(false)

  // *************** Const *************** //
  useEffect(() => setRendered(true), [])

  // *************** JSX *************** //
  return (
    <Button
      className={`
    py-2 px-3 rounded-full
    ${theme === 'dark' ? 'whiteButton' : 'blackButton'}
    `}
      type="button"
      functions={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {rendered && theme === 'dark' ? (
        <FontAwesome icon={['fas', 'sun']} />
      ) : (
        <FontAwesome icon={['fas', 'moon']} />
      )}
    </Button>
  )
}
