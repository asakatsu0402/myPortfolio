import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

export const HEADER_NAV = [
  {
    link: '/about',
    title: 'about'
  },
  {
    link: '/gallery',
    title: 'gallery'
  },
  {
    link: '/works',
    title: 'works'
  },
  {
    link: '/contact',
    title: 'contact'
  }
]

export const SNS_SHARE: Array<{
  prefix: IconPrefix
  icon: IconName
  link: string
}> = [
  {
    prefix: 'fab',
    icon: 'github',
    link: 'https://github.com/asakatsu0402'
  },
  {
    prefix: 'fab',
    icon: 'x-twitter',
    link: 'https://twitter.com/asakatsuyolo'
  },
  {
    prefix: 'fab',
    icon: 'instagram',
    link: 'https://www.instagram.com/asakatsu0402/'
  },
  // {
  //   icon: faPinterest,
  //   link: 'https://www.pinterest.jp/04asaka020502/_created/'
  // },
  {
    prefix: 'far',
    icon: 'note-sticky',
    link: 'https://note.com/asakatsu_0402'
  }
]
