// Modules
import { Story, Meta } from '@storybook/react'
// Components
import { PageLink } from '../atoms/PageLink.atom'

export default {
  title: 'Components/atoms',
  component: PageLink
} as Meta

export const pageLink: Story = () => {
  return <PageLink href="/" text="default" />
}
