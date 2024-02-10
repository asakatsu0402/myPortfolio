import { Text } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Text,
  title: 'Components/Text'
} as Meta<typeof Text>

export const StandardText = {
  args: {
    nameSpace: 'common',
    objName: '',
    objValue: '',
    secondName: '',
    secondValue: '',
    text: 'text'
  }
} as Meta<typeof Text>
