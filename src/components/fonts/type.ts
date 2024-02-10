import type { ReactNode } from 'react'
import { ColorType } from '../../types/uiTypes'

export type FontType = {
  bold?: boolean
  children: ReactNode
  className?: string
  color?: ColorType
  fontSize?: "xx-large" | "x-large" | "large" | "medium" | "small" | "x-small" | "xx-small"
  maxMultiLine?: number
}
