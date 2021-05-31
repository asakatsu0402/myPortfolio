// Modules
import React from "react"

// *************** Type *************** //
type Props = {
  className?: string
  name: string
  type: string
  placeholder?: any
  disabled?: boolean
  function?: any
}

export const Input: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <input
    className={props.className}
    id={props.name}
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    disabled={!!props.disabled}
    onChange={props.function}
  />
)