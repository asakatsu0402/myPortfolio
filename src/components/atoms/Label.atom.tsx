import type { ReactNode, VFC } from 'react'

type Props = {
  className?: string
  htmlFor: string
  text?: string
  children?: ReactNode
}

export const Label: VFC<Props> = ({ className, htmlFor, children, text }: Props) => (
  // *************** JSX *************** //
  <label className={className} htmlFor={htmlFor}>
    {children ? children : text}
  </label>
)
