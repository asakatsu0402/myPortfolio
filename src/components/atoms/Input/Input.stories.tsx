import { Input } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Input,
  title: 'Components/Input'
} as Meta<typeof Input>

export const StandardInput = {
  args: {
    disabled: false,
    type: 'text',
    placeholder: 'Placeholder',
    functions: () => alert('Input clicked')
  }
} as Meta<typeof Input>
