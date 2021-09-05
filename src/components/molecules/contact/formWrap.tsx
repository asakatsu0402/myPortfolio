// Modules
import { ChangeEvent, useState } from 'react'
// Components
import { FormList } from './formList'
import { Button } from '../../atoms/button'

export const FormWrap = () => {
  // *************** Const *************** //
  const [error, setError] = useState<any>({})

  // *************** JSX *************** //
  return (
    <form>
      <FormList error={error} setError={setError} />
      <Button
        className={`blackButton py-1 px-3
          ${
            !!Object.values(error).filter((error: any) => error).length &&
            'disabled'
          }
        `}
        text="送信"
        type="submit"
        disabled={!!Object.values(error).filter((error: any) => error).length}
        functions={(e: ChangeEvent<HTMLButtonElement>) => {
          e.preventDefault()
        }}
      />
    </form>
  )
}
