import { Textarea } from './Textarea'

import type { Meta } from '@storybook/react'

export default {
  component: Textarea,
  title: 'Components/Textarea'
} as Meta<typeof Textarea>

export const StandardTextarea = {
  args: {
    name: 'standard',
    disabled: false,
    placeholder: 'Initial Text',
    value: ''
    // functions: () => alert('Textarea clicked')
  }
} as Meta<typeof Textarea>
