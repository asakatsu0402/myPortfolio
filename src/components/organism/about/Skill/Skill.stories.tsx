/* eslint-disable react/display-name */

import { Skill } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: Skill,
  title: 'organism/Skill'
} as Meta<typeof Skill>

export const StandardSkill = {
  render: () => <Skill />
} as Meta<typeof Skill>
