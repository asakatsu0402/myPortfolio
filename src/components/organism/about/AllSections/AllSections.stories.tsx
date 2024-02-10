/* eslint-disable react/display-name */

import { AllSections } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: AllSections,
  title: 'Components/AllSections'
} as Meta<typeof AllSections>

export const StandardAllSections = {
  render: () => <AllSections />
} as Meta<typeof AllSections>
