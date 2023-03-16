// Types
import type { ReactNode } from 'react'

// Form
export type FormType = {
  className?: string
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}
