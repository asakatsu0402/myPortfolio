// Types
import type { VFC } from 'react'
import type { ButtonType } from '../../interfaces/atomInterfaces'

export const Button: VFC<ButtonType> = ({
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
