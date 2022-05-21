// Types
import type { VFC } from 'react'
import type { LabelType } from '../../types/atomTypes'

export const Label: VFC<LabelType> = ({ className, htmlFor, children, text }: LabelType) => (
  // *************** JSX *************** //
  <label className={className} htmlFor={htmlFor}>
    {children ? children : text}
  </label>
)
