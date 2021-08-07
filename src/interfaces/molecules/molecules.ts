// Modules
import { ReactNode } from 'react'

// Layout
export type LayoutType = {
  children?: ReactNode
  className?: string
  title?: string
  flex?: boolean | undefined
}

// Section
export type SectionType = {
  className?: string | undefined
  title?: string | undefined
  children?: ReactNode
}
