// Interfaces
import type { VFC } from 'react'
import type { TextareaType } from '../../interfaces/atomInterfaces'

export const Textarea: VFC<TextareaType> = ({
  className,
  name,
  placeholder,
  value,
  disabled,
  functions
}: TextareaType) => (
  // *************** JSX *************** //
  <textarea
    className={className}
    id={name}
    name={name}
    value={value}
    placeholder={placeholder}
    disabled={!!disabled}
    onChange={functions}
  />
)
