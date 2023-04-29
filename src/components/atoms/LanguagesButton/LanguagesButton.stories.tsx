/* eslint-disable react/display-name */

import { LanguageButton } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: LanguageButton,
  title: 'Components/LanguageButton'
} as Meta<typeof LanguageButton>

export const StandardLanguageButton = {
  render: () => <LanguageButton />
} as Meta<typeof LanguageButton>
