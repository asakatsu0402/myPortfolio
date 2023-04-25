'use client'

import { useState } from 'react'

import clsx from 'clsx'

import { Button } from '../../atoms/Button/Button'

import { FormList } from './formList'

export const FormWrap = (): JSX.Element => {
  const [error, setError] = useState({})

  return (
    <form>
      <FormList error={error} setError={setError} />
      <Button
        className={clsx([
          'blackButton',
          'py-1',
          'px-3',
          !!Object.values(error).filter((error) => error).length && 'disabled'
        ])}
        text="送信"
        type="submit"
        disabled={!!Object.values(error).filter((error) => error).length}
        functions={(e: React.ChangeEvent<HTMLButtonElement>) => {
          e.preventDefault()
        }}
      />
    </form>
  )
}
