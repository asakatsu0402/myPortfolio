import { FontAwesome } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: FontAwesome,
  title: 'Components/FontAwesome'
} as Meta<typeof FontAwesome>

export const StandardFontAwesome = {
  args: {
    className: '',
    icon: ['fas', 'coffee'],
    size: 'lg'
  }
} as Meta<typeof FontAwesome>
