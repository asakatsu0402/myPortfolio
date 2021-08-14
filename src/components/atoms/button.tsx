// Modules
import React from 'react'
// Interfaces
import { ButtonType } from '../../interfaces/atomInterfaces'

export const Button: React.VFC<ButtonType> = ({
  className,
  disabled,
  functions,
  children,
  text
}: ButtonType) => (
  // *************** JSX *************** //
  <button className={className} disabled={!!disabled} onClick={functions}>
    {children ? children : text}
  </button>
)
