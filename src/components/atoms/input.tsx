// Interfaces
import { input } from '../../interfaces/atomInterfaces'

export const Input: React.VFC<input> = ({
  className,
  name,
  type,
  placeholder,
  value,
  disabled,
  functions,
  onKeyDown
}: input) => (
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
