import { PhotoList } from '.'

import type { Meta } from '@storybook/react'

export default {
  component: PhotoList,
  title: 'Components/PhotoList'
} as Meta<typeof PhotoList>

export const StandardPhotoList = {
  render: () => <PhotoList />
} as Meta<typeof PhotoList>
