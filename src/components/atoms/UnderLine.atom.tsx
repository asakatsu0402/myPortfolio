// Interfaces
import type { VFC } from 'react'
import type { UnderLineType } from '../../types/atomTypes'

export const Underline: VFC<UnderLineType> = ({ className }: UnderLineType) => (
  // *************** JSX *************** //
  <div className={`underline ${className}`} />
)
