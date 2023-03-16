import type { ReactNode } from 'react'

// Underline
export type UnderLineType = {
  className?: string
}

// Font
export type FontType = {
  children: ReactNode
  className?: string
  bold?: boolean
}

// Text
export type TextType = {
  nameSpace?: 'common' | 'top' | 'about' | 'contact' | 'works'
  text: string | Array<string>
  objName?: string
  objValue?: string
  secondName?: string
  secondValue?: string
}
