// Modules
import { Story, Meta } from '@storybook/react'
// Components
import { ExternalLink } from '../atoms/ExternalLink.atom'

export default {
  title: 'Components/atoms',
  component: ExternalLink
} as Meta

export const externalLink: Story = () => {
  return <ExternalLink link="/" text="default" target={true} />
}
