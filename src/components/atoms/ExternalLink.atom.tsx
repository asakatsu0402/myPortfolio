import type { VFC, ReactNode } from 'react'

type Props = {
  className?: string
  link: string
  children?: ReactNode
  text?: string | number
  target?: boolean
  downLoad?: string
}

export const ExternalLink: VFC<Props> = ({
  className,
  link,
  children,
  text,
  target,
  downLoad
}: Props) => (
  // *************** JSX *************** //
  <a
    className={className}
    href={link}
    target={target ? '_blank' : '_self'}
    rel={'noreferrer'}
    download={downLoad ? true : false}
  >
    {children ? children : text}
  </a>
)
