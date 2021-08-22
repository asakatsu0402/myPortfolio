// Modules
import { Story, Meta } from '@storybook/react'
// Components
import { Button } from '../atoms/button'

export default {
  title: 'Components/atoms',
  component: Button
} as Meta

export const button: Story = () => <Button text="default" />
// export const Secondary = () => <Button type="seconary" />
