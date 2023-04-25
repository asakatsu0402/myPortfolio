import { ExternalLink } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: ExternalLink,
  title: 'Components/ExternalLink'
} as Meta<typeof ExternalLink>

export const StandardExternalLink = {
  args: {
    href: 'https://www.google.com',
    text: 'Google'
  }
} as Meta<typeof ExternalLink>
