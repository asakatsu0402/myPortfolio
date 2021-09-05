// Modules
import React from 'react'
// Interfaces
import { ButtonType } from '../../interfaces/atomInterfaces'

export const Button: React.VFC<ButtonType> = ({
  className,
  disabled,
  functions,
  children,
  text,
  type
}: ButtonType) => (
  // *************** JSX *************** //
  <button
    className={className}
    disabled={!!disabled}
    type={type}
    onClick={functions}
  >
    {children ? children : text}
  </button>
)
