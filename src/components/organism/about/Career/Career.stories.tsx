/* eslint-disable react/display-name */

import { Career } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: Career,
  title: 'organism/Career'
} as Meta<typeof Career>

export const StandardCareer = {
  render: () => <Career />
} as Meta<typeof Career>
