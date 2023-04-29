/* eslint-disable react/display-name */

import { Text } from '../atoms/Text'

import { H1 } from './H1'
import { H2 } from './H2'
import { H3 } from './H3'

import type { Meta } from '@storybook/react'

export default {
  argTypes: {},
  title: 'Atoms/Fonts'
}

export const Default = {
  args: {
    bold: false,
    multiLine: false
  },

  render: (args): JSX.Element => {
    return (
      <>
        <H1 {...args}>H1: Text</H1>
        <H2 {...args}>H2: Text</H2>
        <H3 {...args}>H3: Text</H3>
        <Text {...args}>Text: Text</Text>
      </>
    )
  }
}

export const H1Default = {
  args: {
    bold: false,
    multiLine: false
  },
  render: (args) => {
    return (
      <>
        <H1 {...args}>xx-large: H1タグを使ったテキスト</H1>
        <H1 {...args}>x-large: H1タグを使ったテキスト</H1>
        <H1 {...args}>large: H1タグを使ったテキスト</H1>
        <H1 {...args}>medium: H1タグを使ったテキスト</H1>
        <H1 {...args}>small: H1タグを使ったテキスト</H1>
        <H1 {...args}>x-small: H1タグを使ったテキスト</H1>
        <H1 {...args}>xx-small: H1タグを使ったテキスト</H1>
      </>
    )
  }
} as Meta<typeof H1>

export const H2Default = {
  args: {
    bold: false,
    multiLine: false
  },
  render: (args) => {
    return (
      <>
        <H2 {...args}>xx-large: H2タグを使ったテキスト</H2>
        <H2 {...args}>x-large: H2タグを使ったテキスト</H2>
        <H2 {...args}>large: H2タグを使ったテキスト</H2>
        <H2 {...args}>medium: H2タグを使ったテキスト</H2>
        <H2 {...args}>small: H2タグを使ったテキスト</H2>
        <H2 {...args}>x-small: H2タグを使ったテキスト</H2>
        <H2 {...args}>xx-small: H2タグを使ったテキスト</H2>
      </>
    )
  }
} as Meta<typeof H2>

export const H3Default = {
  args: {
    bold: false,
    multiLine: false
  },
  render: (args) => {
    return (
      <>
        <H3 {...args}>xx-large: H3タグを使ったテキスト</H3>
        <H3 {...args}>x-large: H3タグを使ったテキスト</H3>
        <H3 {...args}>large: H3タグを使ったテキスト</H3>
        <H3 {...args}>medium: H3タグを使ったテキスト</H3>
        <H3 {...args}>small: H3タグを使ったテキスト</H3>
        <H3 {...args}>x-small: H3タグを使ったテキスト</H3>
        <H3 {...args}>xx-small: H3タグを使ったテキスト</H3>
      </>
    )
  }
} as Meta<typeof H3>

export const TextDefault = {
  args: {
    nameSpace: 'common',
    objName: '',
    objValue: '',
    secondName: '',
    secondValue: '',
    text: 'text'
  },
  render: (args) => {
    return (
      <>
        <Text {...args} size="xx-large">
          xx-large: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="x-large">
          x-large: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="large">
          large: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="medium">
          medium: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="small">
          small: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="x-small">
          x-small: Textタグを使ったテキスト
        </Text>
        <Text {...args} size="xx-small">
          xx-small: Textタグを使ったテキスト
        </Text>
      </>
    )
  }
} as Meta<typeof Text>
