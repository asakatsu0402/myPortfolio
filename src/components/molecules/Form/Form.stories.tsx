/* eslint-disable react/display-name */

import { Form } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: Form,
  title: 'Components/Form'
} as Meta<typeof Form>

export const StandardForm = {
  args: {
    children: 'Form',
    onSubmit: (): void => alert('Form submitted')
  }
} as Meta<typeof Form>
