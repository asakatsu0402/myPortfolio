// Modules
import Link from 'next/link'
// Interfaces
import { link } from '../../interfaces/atomInterfaces'

export const PageLink: React.VFC<link> = ({
  className,
  href,
  text,
  children
}: link) => (
  // *************** JSX *************** //
  <Link href={href} passHref>
    <a className={className}>{children ? children : text}</a>
  </Link>
)
