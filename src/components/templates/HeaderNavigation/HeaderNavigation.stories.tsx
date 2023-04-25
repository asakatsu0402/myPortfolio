import { HeaderNavigation } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: HeaderNavigation,
  title: 'Layouts/Header'
} as Meta<typeof HeaderNavigation>

export const StandardHeader = {
  render: () => <HeaderNavigation />
} as Meta<typeof HeaderNavigation>
