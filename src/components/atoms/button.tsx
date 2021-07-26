// Modules
import React from "react"
// Interfaces
import { button } from "../../interfaces/atomInterfaces"

export const Button: React.VFC<button> = ({
  className,
  disabled,
  functions,
  children,
  text
}: button) => (
  // *************** JSX *************** //
  <button
    className={className}
    disabled={!!disabled}
    onClick={functions}
  >
    { children ? children : text }
  </button>
)