// Modules
import { useState } from 'react'
// Components
import { Label } from '../../atoms/label'
import { Select } from '../../atoms/select'
import { Textarea } from '../../atoms/textarea'
import { Input } from '../../atoms/input'
import { Underline } from '../../atoms/underLine'
// Functions
import { handleChange } from '../../../functions/commonFunctions'
// Config
import { formList } from '../../../config/contactConfig'
// Interfaces
import type { VFC, ChangeEvent } from 'react'
import type { FormListType } from '../../../interfaces/molecules/contactInterfaces'

export const FormList: VFC<FormListType> = ({
  error,
  setError
}: FormListType) => {
  // *************** Const *************** //
  const [value, setValue] = useState<any>({})

  console.log(value)
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
            <Textarea
              className="lineInput px-1 py-0.5"
              name={form.name}
              value={value[form.name] || ''}
              functions={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  form.required,
                  e.target.name,
                  form.label,
                  form.regex,
                  e.target.value,
                  form.errorText,
                  setError,
                  false,
                  setValue
                )
              }}
            />
          ) : (
            <Input
              className="lineInput px-1 py-0.5"
              type={form.type}
              name={form.name}
              value={value[form.name] || ''}
              functions={(e: ChangeEvent<HTMLInputElement>) => {
                handleChange(
                  form.required,
                  e.target.name,
                  form.label,
                  form.regex,
                  e.target.value,
                  form.errorText,
                  setError,
                  false,
                  setValue
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
