import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  htmlFor: string
  text?: string
}

export const Label: React.FC<Props> = ({ className, htmlFor, children, text }: Props) => (
  <label className={className} htmlFor={htmlFor}>
    {children ? children : text}
  </label>
)
