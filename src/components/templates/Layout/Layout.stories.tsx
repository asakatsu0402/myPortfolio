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
    functions: () => alert('Button clicked'),
    type: 'button'
  }
} as Meta<typeof Layout>
