// Modules
import { useState } from 'react'
// Components
import { FormList } from './formList'
import { Button } from '../../atoms/button'

export const FormWrap: React.VFC = () => {
  // *************** Const *************** //
  const [error, setError] = useState({})

  // *************** JSX *************** //
  return (
    <form>
      <FormList error={error} setError={setError} />
      <Button
        className={`blackButton py-1 px-3
          ${
            !!Object.values(error).filter((error) => error).length && 'disabled'
          }
        `}
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
