// Modules
import React, {
  ReactChild
} from "react"
import Link from "next/link"
import { log } from "util"

// *************** Type *************** //
type Props = {
  className?: any
  href: string
  text?: any
  children?: ReactChild
}

export const PageLink: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <Link href={props.href}>
    <a className={props.className}>
      { props.children ? (
        props.children
      ) : (
        props.text
      )}
    </a>
  </Link>
)