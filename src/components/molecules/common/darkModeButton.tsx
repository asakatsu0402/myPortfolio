// Modules
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// Components
import { Button } from '../../atoms/button'

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
      functions={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {rendered && theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </Button>
  )
}
