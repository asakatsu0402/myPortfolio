import type { UnderLineType } from '../../types/atomTypes'

export const Underline: React.FC<UnderLineType> = ({ className }: UnderLineType) => (
  <div className={`underline ${className}`} />
)
