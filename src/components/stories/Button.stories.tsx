// Modules
import type { Story, Meta } from '@storybook/react'
// Components
import { Button } from '../atoms/Button.atom'

export default {
  title: 'Components/atoms',
  component: Button
} as Meta

export const button: Story = () => <Button text="default" type="button" />
// export const Secondary = () => <Button type="seconary" />
