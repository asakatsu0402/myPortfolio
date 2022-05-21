// Types
import type { SelectType } from '../../types/atomTypes'

export const Select: React.VFC<SelectType> = ({
  className,
  name,
  placeholder,
  disabled,
  functions,
  label,
  options,
  optionValue,
  optionLabel
}: SelectType) => (
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
