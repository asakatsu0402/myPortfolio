import type { ReactNode } from 'react'

import Link from 'next/link'

type Props = {
  className?: string
  href: string
  text?: string | number
  children?: ReactNode
  asPath?: string
  locale?: string
}

export const PageLink = ({
  className,
  href,
  text,
  children,
  asPath,
  locale
}: Props): JSX.Element => (
  <Link className={className} href={href} as={asPath && asPath} locale={locale} passHref>
    {children ? children : text}
  </Link>
)
