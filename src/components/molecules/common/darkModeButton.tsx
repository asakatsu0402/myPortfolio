// Modules
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
// Components
import { Button } from "../../atoms/Button"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

// *************** Type *************** //
type Props = {

}

export const DarkModeButton: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const { theme, setTheme } = useTheme()
  const [rendered, setRendered] = useState<boolean>(false)

  // *************** Const *************** //
  useEffect(() =>
    setRendered(true), []
  )

  // *************** JSX *************** //
  return (
    <Button
      className="fixed right-5 bottom-5 p-2 bg-red-800

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