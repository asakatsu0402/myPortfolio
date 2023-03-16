type Props = {
  className?: string
  name: string
  label: string
  options: Array<string | number>
  optionLabel: string
  optionValue: string
  placeholder?: string
  disabled?: boolean
  functions?: () => void
}
export const Select: React.VFC<Props> = ({
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
  // *************** JSX *************** //
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
