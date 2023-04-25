import { Layout } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: Layout,
  title: 'Layouts/Layout'
} as Meta<typeof Layout>

export const StandardLayout = {
  args: {
    children: 'Button',
    disabled: false,
    type: 'button',
    functions: () => alert('Button clicked')
  }
} as Meta<typeof Layout>
