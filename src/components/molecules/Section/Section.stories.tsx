import { Section } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Section,
  title: 'Components/Section'
} as Meta<typeof Section>

export const StandardSection = {
  args: {
    children: 'Section',
    key: '1',
    title: 'Section'
  }
} as Meta<typeof Section>
