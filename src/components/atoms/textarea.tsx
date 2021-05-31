// Modules
import React from "react"

// *************** Type *************** //
type Props = {
  className?: string
  name: string
  placeholder?: any
  disabled?: boolean
  function?: any
}

export const Textarea: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <textarea
    className={props.className}
    id={props.name}
    name={props.name}
    placeholder={props.placeholder}
    disabled={!!props.disabled}
    onChange={props.function}
  />
)