// Modules
import { VFC } from 'react'
// Components
import { Label } from '../../atoms/label'
import { Select } from '../../atoms/select'
import { Textarea } from '../../atoms/textarea'
import { Input } from '../../atoms/input'
import { Underline } from '../../atoms/underLine'
// Functions
import { CommonFunctions } from '../../../functions/commonFunctions'
// Config
import { formList } from '../../../config/contactConfig'
// Interfaces
import { FormListType } from '../../../interfaces/molecules/contactInterfaces'

export const FormList: VFC<FormListType> = ({
  error,
  setError
}: FormListType) => {
  // *************** Const *************** //
  const { commons } = CommonFunctions()

  // *************** JSX *************** //
  return (
    <ul className="p-2">
      {formList.map((form: any, i: number) => (
        <li className="lineInputGroup first:m-0 mt-5" key={i}>
          <Label
            className="cursor-pointer"
            htmlFor={form.name}
            text={form.label}
          />
          {form.tag === 'select' ? (
            <Select
              className="lineInput"
              name={form.name}
              label={form.label}
              initialLabel={form.initialLabel}
              options={form.options}
              optionValue="value"
              optionLabel="label"
            />
          ) : form.tag === 'textarea' ? (
            <Textarea className="lineInput px-1 py-0.5" name={form.name} />
          ) : (
            <Input
              className="lineInput px-1 py-0.5"
              name={form.name}
              type={form.type}
              functions={(e: React.ChangeEvent<HTMLInputElement>) => {
                commons.checkValidation(
                  e.target.name,
                  form.label,
                  '',
                  e.target.value,
                  '',
                  setError
                )
              }}
            />
          )}
          <Underline />
          {error[form.name] && (
            <p className="text-crimson font-bold text-sm">{error[form.name]}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
