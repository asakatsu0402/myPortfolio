import { Select } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Select,
  title: 'Components/Select'
} as Meta<typeof Select>

export const StandardSelect = {
  args: {
    className: '',
    disabled: false,
    functions: () => alert('Select'),
    label: 'Select an option',
    name: 'select',
    optionLabel: 'label',
    optionValue: 'value',
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option'
  }
} as Meta<typeof Select>
