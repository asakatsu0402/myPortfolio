// Interfaces
import { TextareaType } from '../../interfaces/atomInterfaces'

export const Textarea: React.VFC<TextareaType> = ({
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
