import { DarkModeButton } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: DarkModeButton,
  title: 'Components/DarkModeButton'
} as Meta<typeof DarkModeButton>

export const StandardDarkModeButton = {
  render: () => <DarkModeButton />
} as Meta<typeof DarkModeButton>
