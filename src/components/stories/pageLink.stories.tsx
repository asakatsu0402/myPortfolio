// Modules
import { Story, Meta } from '@storybook/react'
// Components
import { PageLink } from '../atoms/pageLink'

export default {
  title: 'Components/atoms',
  component: PageLink
} as Meta

export const pageLink: Story = () => {
  return <PageLink href="/" text="default" />
}
