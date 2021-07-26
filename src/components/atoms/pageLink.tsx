// Modules
import React from "react"
import Link from "next/link"
// Interfaces
import { link } from "../../interfaces/atomInterfaces"

export const PageLink: React.VFC<link> = ({
  className,
  href,
  text,
  children
}: link) => (
  // *************** JSX *************** //
  <Link href={href}>
    <a className={className}>
      { children ? children : text }
    </a>
  </Link>
)