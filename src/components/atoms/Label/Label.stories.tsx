/* eslint-disable react/display-name */
import { Label } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Label,
  title: 'Components/Label'
} as Meta<typeof Label>

export const StandardLabel = {
  args: {
    children: 'Label',
    htmlFor: 'input',
    text: 'Label'
  }
} as Meta<typeof Label>
