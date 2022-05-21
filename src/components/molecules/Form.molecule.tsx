// Types
import type { FormType } from '../../types/molecules'

export const Form: React.VFC<FormType> = ({ className, children, onSubmit }: FormType) => (
  // *************** JSX *************** //
  <form
    className={className}
    noValidate
    onSubmit={(e): boolean => {
      onSubmit(e)
      e.preventDefault()
      return false
    }}
  >
    {children}
  </form>
)
