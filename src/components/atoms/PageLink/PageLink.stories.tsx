import { PageLink } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: PageLink,
  title: 'Components/PageLink'
} as Meta<typeof PageLink>

export const StandardPageLink = {
  args: {
    asPath: '',
    className: '',
    href: 'https://www.google.com',
    locale: 'en',
    text: 'Google'
  }
} as Meta<typeof PageLink>
