import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form: React.FC<Props> = ({ className, children, onSubmit }: Props) => (
  <form
    className={className}
    noValidate
    onSubmit={(e): boolean => {
      onSubmit(e)
      e.preventDefault()
      return false
    }}
  >
    {children}
  </form>
)
