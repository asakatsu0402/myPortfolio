// Modules
import Link from 'next/link'
// Types
import type { VFC } from 'react'
import type { LinkType } from '../../interfaces/atomInterfaces'

export const PageLink: VFC<LinkType> = ({
  className,
  href,
  text,
  children
}: LinkType) => (
  // *************** JSX *************** //
  <Link href={href} passHref>
    <a className={className}>{children ? children : text}</a>
  </Link>
)
