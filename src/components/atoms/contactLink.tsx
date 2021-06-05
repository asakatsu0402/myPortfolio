// Modules
import React, {
  ReactNode
} from "react"

// *************** Type *************** //
type Props = {
  className?: string
  link: string
  children?: ReactNode
  text?: any
}

export const ContactLink: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <a
      className={props.className}
      href={props.link}
    >
      { props.children ? props.children : props.text }
    </a>
  )
}