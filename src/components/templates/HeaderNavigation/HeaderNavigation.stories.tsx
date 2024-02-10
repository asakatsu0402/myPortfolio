/* eslint-disable react/display-name */

import { HeaderNavigation } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: HeaderNavigation,
  title: 'Layouts/Header'
} as Meta<typeof HeaderNavigation>

export const StandardHeaderNavigation = {
  render: () => <HeaderNavigation />
} as Meta<typeof HeaderNavigation>
