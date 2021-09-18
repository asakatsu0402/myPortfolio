// Interfaces
import type { VFC } from 'react'
import type { SelectType } from '../../interfaces/atomInterfaces'

export const Select: VFC<SelectType> = ({
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
