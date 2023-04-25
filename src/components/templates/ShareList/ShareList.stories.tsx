import { ShareList } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: ShareList,
  title: 'Components/ShareList'
} as Meta<typeof ShareList>

export const StandardShareList = {
  render: () => <ShareList />
} as Meta<typeof ShareList>
