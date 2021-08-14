// Modules
import React from 'react'
// Interfaces
import { ExternalType } from '../../interfaces/atomInterfaces'

export const ExternalLink: React.VFC<ExternalType> = ({
  className,
  link,
  children,
  text,
  target,
  downLoad
}: ExternalType) => {
  // *************** JSX *************** //
  return (
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
}
