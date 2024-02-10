import { Button } from './ImageBlock'

import type { Meta } from '@storybook/react'

export default {
  component: Button,
  title: 'Components/Button'
} as Meta<typeof Button>

export const StandardButton = {
  args: {
    children: 'Button',
    disabled: false,
    functions: () => alert('Button clicked'),
    type: 'button'
  }
} as Meta<typeof Button>
