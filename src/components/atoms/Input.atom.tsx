// Interfaces
import type { VFC } from 'react'
import type { InputType } from '../../types/atomTypes'

export const Input: VFC<InputType> = ({
  className,
  name,
  type,
  placeholder,
  value,
  disabled,
  functions,
  onKeyDown
}: InputType) => (
  // *************** JSX *************** //
  <input
    className={className}
    id={name}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    disabled={!!disabled}
    onChange={functions}
    onKeyDown={onKeyDown && onKeyDown}
  />
)
