import { UnderLine } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: UnderLine,
  title: 'Components/UnderLine'
} as Meta<typeof UnderLine>

export const StandardUnderLine = {
  args: {
    className: ''
  }
} as Meta<typeof UnderLine>
