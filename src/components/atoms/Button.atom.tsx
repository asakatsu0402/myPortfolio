import type { VFC } from 'react'
import type { ButtonType } from '../../types/atomTypes'

export const Button: VFC<ButtonType> = ({
  className,
  disabled,
  functions,
  children,
  text,
  type
}: ButtonType) => (
  <button className={className} disabled={!!disabled} type={type} onClick={functions}>
    {children ? children : text}
  </button>
)
