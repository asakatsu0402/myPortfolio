import { Underline } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Underline,
  title: 'Components/Underline'
} as Meta<typeof Underline>

export const StandardUnderline = {
  args: {
    className: ''
  }
} as Meta<typeof Underline>
