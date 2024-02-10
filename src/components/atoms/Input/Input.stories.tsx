import { Input } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Input,
  title: 'Components/Input'
} as Meta<typeof Input>

export const StandardInput = {
  args: {
    disabled: false,
    functions: () => alert('Input clicked'),
    placeholder: 'Placeholder',
    type: 'text'
  }
} as Meta<typeof Input>
