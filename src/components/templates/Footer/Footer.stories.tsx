import { Footer } from '.'

import type { Meta } from '@storybook/react'

export default {
  args: {},
  component: Footer,
  title: 'Layouts/Footer'
} as Meta<typeof Footer>

export const StandardFooter = {
  render: () => <Footer />
} as Meta<typeof Footer>
