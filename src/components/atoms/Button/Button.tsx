import type { ReactNode } from 'react'

type Props = {
  className?: string
  text?: string | number
  type: 'submit' | 'button' | 'submit' | 'reset'
  children?: ReactNode
  disabled?: boolean
  functions?: () => void
}

export const Button: React.FC<Props> = ({
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
