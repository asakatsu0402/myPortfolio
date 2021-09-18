// Modules
import type { ReactNode } from 'react'

// *************** Types *************** //
// Label
export type LabelType = {
  className?: string
  htmlFor: string
  text?: any
  children?: ReactNode
}

// Underline
export type UnderLineType = {
  className?: string
}

// Button
export type ButtonType = {
  className?: string
  text?: any
  children?: ReactNode
  disabled?: boolean
  functions?: any
  type?: any
}

// Link
export type LinkType = {
  className?: string
  href: string
  text?: any
  children?: ReactNode
}

// External Link
export type ExternalType = {
  className?: string
  link: string
  children?: ReactNode
  text?: any
  target?: boolean
  downLoad?: string
}

// Select
export type SelectType = {
  className?: string
  name: string
  label: string
  initialLabel?: string
  options: Array<any>
  optionLabel: string
  optionValue: string
  placeholder?: any
  disabled?: boolean
  functions?: any
}

// Textarea
export type TextareaType = {
  className?: string
  name: string
  placeholder?: any
  value?: any
  disabled?: boolean
  functions?: any
}

// Input
export type InputType = {
  className?: string
  name: string
  type: string
  placeholder?: any
  value?: any
  disabled?: boolean
  functions?: any
  onKeyDown?: any
}
