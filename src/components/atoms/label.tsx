// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  htmlFor: string
  text?: any
  children?: ReactNode
}

export const Label: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <label
    htmlFor={props.htmlFor}
  >
    { props.children ? props.children : props.text }
  </label>
)