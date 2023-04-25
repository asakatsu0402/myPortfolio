type Props = {
  className?: string
  name: string
  type: string
  placeholder?: string
  value?: string | number
  disabled?: boolean
  functions?: () => void
  onKeyDown?: () => void
}

export const Input = ({
  className,
  name,
  type,
  placeholder,
  value,
  disabled,
  functions,
  onKeyDown
}: Props): JSX.Element => (
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
