import type { VFC, ReactNode } from 'react'

type Props = {
  className?: string
  text?: string | number
  type: 'submit' | 'button' | 'submit' | 'reset'
  children?: ReactNode
  disabled?: boolean
  functions?: () => void
}

export const Button: VFC<Props> = ({
  className,
  disabled,
  functions,
  children,
  text,
  type
}: Props) => (
  <button className={className} disabled={!!disabled} type={type} onClick={functions}>
    {children ? children : text}
  </button>
)
