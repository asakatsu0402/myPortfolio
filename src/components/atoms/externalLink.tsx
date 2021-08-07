// Modules
import React from 'react'
// Interfaces
import { External } from '../../interfaces/atomInterfaces'

export const ExternalLink: React.VFC<External> = ({
  className,
  link,
  children,
  text,
  target
}: External) => {
  // *************** JSX *************** //
  return (
    <a
      className={className}
      href={link}
      target={target ? '_blank' : '_self'}
      rel={'noreferrer'}
    >
      {children ? children : text}
    </a>
  )
}
