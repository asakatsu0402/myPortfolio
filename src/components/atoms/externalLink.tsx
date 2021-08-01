// Modules
import React from 'react'

// Interfaces
import { external } from '../../interfaces/atomInterfaces'

export const ExternalLink: React.VFC<external> = ({
  className,
  link,
  children,
  text
}: external) => {
  // *************** JSX *************** //
  return (
    <a className={className} href={link} target="_blank" rel="noreferrer">
      {children ? children : text}
    </a>
  )
}
