// Interfaces
import { select } from '../../interfaces/atomInterfaces'

export const Select: React.VFC<select> = ({
  className,
  name,
  placeholder,
  disabled,
  functions,
  label,
  initialLabel,
  options,
  optionValue,
  optionLabel
}: select) => (
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
      <option value="" hidden>
        {initialLabel}
      </option>
      {options.map((option: any, i: number) => (
        <option key={i} value={option[optionValue]}>
          {option[optionLabel]}
        </option>
      ))}
    </optgroup>
  </select>
)
