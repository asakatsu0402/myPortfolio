// Form
export const formList = [
  {
    name: 'name',
    label: '名前',
    tag: 'input',
    type: 'text'
  },
  {
    name: 'tel',
    label: '電話番号',
    tag: 'input',
    type: 'text'
  },
  {
    name: 'email',
    label: 'メールアドレス',
    tag: 'input',
    type: 'email'
  },
  {
    name: 'category',
    label: 'お問い合わせカテゴリー',
    initialLabel: 'カテゴリーを選択してください。',
    tag: 'select',
    options: [
      {
        label: '仕事依頼について',
        value: '仕事依頼について'
      },
      {
        label: '協業について',
        value: '協業について'
      },
      {
        label: 'ブログについて',
        value: 'ブログについて'
      },
      {
        label: 'その他',
        value: 'その他'
      }
    ]
  },
  {
    name: 'content',
    label: 'お問い合わせ内容',
    tag: 'textarea'
  }
]

// Usage
export const contactList = [
  {
    label: 'E-mail',
    text: '04asaka02@gmail.com',
    link: 'mailto:04asaka02@gmail.com'
  },
  {
    label: 'Twitter',
    text: '@asakatsuyolo',
    link: 'https://twitter.com/asakatsuyolo'
  }
]