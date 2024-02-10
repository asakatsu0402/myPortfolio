import type { ReactNode } from 'react'

import Link from 'next/link'

type Props = {
  asPath?: string
  children?: ReactNode
  className?: string
  href: string
  locale?: string
  text?: string | number
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
