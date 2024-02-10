import { AllCategories } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: AllCategories,
  title: 'Components/AllCategories'
} as Meta<typeof AllCategories>

export const StandardAllCategories = {
  render: () => <AllCategories />
} as Meta<typeof AllCategories>
