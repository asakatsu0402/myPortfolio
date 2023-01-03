type Props = {
  className?: string
  name: string
  placeholder?: string
  value?: string | number
  disabled?: boolean
  functions?: () => void
}

export const Textarea = ({
  className,
  name,
  placeholder,
  value,
  disabled,
  functions
}: Props): JSX.Element => (
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
