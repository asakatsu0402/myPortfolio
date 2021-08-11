// Modules
import React from 'react'
// Interfaces
import { label } from '../../interfaces/atomInterfaces'

export const Label: React.VFC<label> = ({
  className,
  htmlFor,
  children,
  text
}: label) => (
  // *************** JSX *************** //
  <label className={className} htmlFor={htmlFor}>
    {children ? children : text}
  </label>
)
