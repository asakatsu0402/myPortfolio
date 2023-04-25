import { Button } from './Button'

import type { Meta } from '@storybook/react'

export default {
  component: Button,
  title: 'Components/Button'
} as Meta<typeof Button>

export const StandardButton = {
  args: {
    children: 'Button',
    disabled: false,
    type: 'button',
    functions: () => alert('Button clicked')
  }
} as Meta<typeof Button>
