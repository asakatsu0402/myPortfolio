// Modules
import React from 'react'
// Interfaces
import { UnderLineType } from '../../interfaces/atomInterfaces'

export const Underline: React.VFC<UnderLineType> = ({
  className
}: UnderLineType) => (
  // *************** JSX *************** //
  <div className={`underline ${className}`} />
)
