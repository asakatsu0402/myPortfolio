// Modules
import React from "react"

// *************** Type *************** //
type Props = {
  className?: string
  name: string
  label: string
  initialLabel?: string
  options: Array<any>
  optionLabel: string
  optionValue: string
  placeholder?: any
  disabled?: boolean
  function?: any
}

export const Select: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <select
    className={props.className}
    id={props.name}
    name={props.name}
    placeholder={props.placeholder}
    disabled={!!props.disabled}
    onChange={props.function}
  >
    <optgroup label={props.label}>
      <option
        value=""
        hidden
      >
        {props.initialLabel}
      </option>
      { props.options.map((option: any, i: number) => (
        <option
          key={i}
          value={option[props.optionValue]}
        >
          {option[props.optionLabel]}
        </option>
      ))}
    </optgroup>
  </select>
)