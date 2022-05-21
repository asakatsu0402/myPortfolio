// Types
import type { VFC } from 'react'
import type { ExternalType } from '../../types/atomTypes'

export const ExternalLink: VFC<ExternalType> = ({
  className,
  link,
  children,
  text,
  target,
  downLoad
}: ExternalType) => (
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
