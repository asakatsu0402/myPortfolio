// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  className?: string
  text?: any
  children?: ReactNode
  disabled?: boolean
  function?: any
}

export const Button: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <button
    className={props.className}
    disabled={!!props.disabled}
    onClick={props.function}
  >
    { props.children ? props.children : props.text }
  </button>
)