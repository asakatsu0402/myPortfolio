import { Header } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: Header,
  title: 'Layouts/Header'
} as Meta<typeof Header>

export const StandardHeader = {
  render: () => <Header />
} as Meta<typeof Header>
