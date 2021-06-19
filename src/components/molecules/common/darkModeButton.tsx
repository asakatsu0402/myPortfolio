// Modules
import React, {
  useEffect,
  useState
} from "react"
import { useTheme } from "next-themes"
// Components
import { Button } from "../../atoms/button"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export const DarkModeButton: React.VFC = () => {
  // *************** Const *************** //
  const { theme, setTheme } = useTheme()
  const [rendered, setRendered] = useState<boolean>(false)

  // *************** Const *************** //
  useEffect(
    () => setRendered(true),
    []
  )

  // *************** JSX *************** //
  return (
    <Button
      className="py-2 px-3 rounded-full bg-red-800

      "
      function={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      { rendered && theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
        />
      )}
    </Button>
  )
}