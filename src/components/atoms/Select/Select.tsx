type Props = {
  className?: string
  disabled?: boolean
  functions?: () => void
  label: string
  name: string
  optionLabel: string
  optionValue: string
  options: Array<string | number>
  placeholder?: string
}

export const Select: React.FC<Props> = ({
  className,
  name,
  placeholder,
  disabled,
  functions,
  label,
  options,
  optionValue,
  optionLabel
}: Props) => (
  <select
    className={className}
    id={name}
    name={name}
    placeholder={placeholder}
    disabled={!!disabled}
    onChange={functions}
  >
    <optgroup label={label}>
      <option value="" />
      {options.map((option, i) => (
        <option key={i} value={option[optionValue]}>
          {option[optionLabel]}
        </option>
      ))}
    </optgroup>
  </select>
)
