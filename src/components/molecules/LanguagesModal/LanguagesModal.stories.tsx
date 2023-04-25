import { LanguagesModal } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: LanguagesModal,
  title: 'Components/LanguagesModal'
} as Meta<typeof LanguagesModal>

export const StandardLanguagesModal = {
  render: () => <LanguagesModal />
} as Meta<typeof LanguagesModal>
