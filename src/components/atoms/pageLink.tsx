// Modules
import Link from 'next/link'
// Types
import type { LinkType } from '../../types/atomTypes'

export const PageLink: React.VFC<LinkType> = ({
  className,
  href,
  text,
  children,
  asPath,
  locale
}: LinkType) => (
  // *************** JSX *************** //
  <Link href={href} as={asPath && asPath} locale={locale} passHref>
    <a className={className}>{children ? children : text}</a>
  </Link>
)
