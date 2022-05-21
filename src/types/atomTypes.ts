// Types
import type { ReactNode } from 'react'
import type { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons'

// *************** Types *************** //
// Label
export type LabelType = {
  className?: string
  htmlFor: string
  text?: string
  children?: ReactNode
}

// Underline
export type UnderLineType = {
  className?: string
}

// Button
export type ButtonType = {
  className?: string
  text?: string | number
  type: 'submit' | 'button' | 'submit' | 'reset'
  children?: ReactNode
  disabled?: boolean
  functions?: any
}

// Link
export type LinkType = {
  className?: string
  href: string
  text?: string | number
  children?: ReactNode
  asPath?: string
  locale?: string
}

// External Link
export type ExternalType = {
  className?: string
  link: string
  children?: ReactNode
  text?: string | number
  target?: boolean
  downLoad?: string
}

// Select
export type SelectType = {
  className?: string
  name: string
  label: string
  options: Array<any>
  optionLabel: string
  optionValue: string
  placeholder?: string
  disabled?: boolean
  functions?: any
}

// Textarea
export type TextareaType = {
  className?: string
  name: string
  placeholder?: string
  value?: any
  disabled?: boolean
  functions?: any
}

// Input
export type InputType = {
  className?: string
  name: string
  type: string
  placeholder?: string
  value?: any
  disabled?: boolean
  functions?: any
  onKeyDown?: any
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

// FontAwesomeIcon
export type FontAwesomeType = {
  className?: string
  icon: [IconPrefix, IconName]
  size?: 'xs' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '10x'
}
