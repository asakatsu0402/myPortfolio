'use client'

import type { NextPage } from 'next'

export const Error: NextPage = () => {
  return (
    <div>
      <dl>
        <dt>404</dt>
        <dd>ページが見つかりません</dd>
      </dl>
    </div>
  )
}

export default Error
