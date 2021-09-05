// Modules
import { ReactNode } from 'react'

// *************** Interfaces *************** //
// Label
export type label = {
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
export type link = {
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
export type select = {
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
export type textarea = {
  className?: string
  name: string
  placeholder?: any
  disabled?: boolean
  functions?: any
}

// Input
export type input = {
  className?: string
  name: string
  type: string
  placeholder?: any
  value?: any
  disabled?: boolean
  functions?: any
  onKeyDown?: any
}
