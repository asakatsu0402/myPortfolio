// Types
import type { ReactNode } from 'react'

// Section
export type SectionType = {
  className?: string | undefined
  key?: number | string | undefined
  title?: string | undefined
  children?: ReactNode
}

// Form
export type FormType = {
  className?: string
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}
