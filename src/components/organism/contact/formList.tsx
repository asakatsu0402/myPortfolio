// Modules
import { useState } from 'react'
// Components
import { Label } from '../../atoms/Label/Label'
import { Select } from '../../atoms/Select/Select'
import { Textarea } from '../../atoms/Textarea/Textarea'
import { Input } from '../../atoms/Input/Input'
import { Underline } from '../../atoms/UnderLine/UnderLine.atom'
// Utils
import { handleChange } from '../../../utils/commonFunctions'
// Config
import { formList } from '../../../config/contactConfig'
// Types
import type { ChangeEvent } from 'react'
import type { FormListType } from '../../../types/organism/contactInterfaces'

export const FormList: React.VFC<FormListType> = ({ error, setError }: FormListType) => {
  // *************** Const *************** //
  const [value, setValue] = useState({})

  console.log(value)
  // *************** JSX *************** //
  return (
    <ul className="p-2">
      {formList.map((form, i) => (
        <li className="lineInputGroup first:m-0 mt-5" key={i}>
          <Label className="cursor-pointer" htmlFor={form.name} text={form.label} />
          {form.tag === 'select' ? (
            <Select
              className="lineInput"
              name={form.name}
              placeholder={form.initialLabel}
              label={form.label}
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
          {error[form.name] && <p className="text-crimson font-bold text-sm">{error[form.name]}</p>}
        </li>
      ))}
    </ul>
  )
}
