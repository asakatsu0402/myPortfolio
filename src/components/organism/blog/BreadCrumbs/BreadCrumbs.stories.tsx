import { Breadcrumbs } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs'
} as Meta<typeof Breadcrumbs>

export const StandardBreadcrumbs = {
  args: {
    title: '記事タイトル',
    id: '1'
  }
} as Meta<typeof Breadcrumbs>
