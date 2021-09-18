// Form
export const formList = [
  {
    name: 'name',
    label: '名前',
    tag: 'input',
    type: 'text',
    required: true,
    regex: '',
    errorText: ''
  },
  {
    name: 'tel',
    label: '電話番号',
    tag: 'input',
    type: 'text',
    required: true,
    regex: '',
    errorText: ''
  },
  {
    name: 'email',
    label: 'メールアドレス',
    tag: 'input',
    type: 'email',
    required: true,
    regex:
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
    errorText: '半角英数字@ ~ . ~ の形で入力してください。'
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
    ],
    required: false,
    regex: '',
    errorText: ''
  },
  {
    name: 'content',
    label: 'お問い合わせ内容',
    tag: 'textarea',
    required: true,
    // regex: /^[0-9]{1}$/,
    regex: '',
    errorText: '1文字以上で入力してください。'
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
