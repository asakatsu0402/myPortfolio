// Modules
import React from 'react'
// Components
import { Label } from '../../atoms/label'
import { Select } from '../../atoms/select'
import { Textarea } from '../../atoms/textarea'
import { Input } from '../../atoms/input'
import { Button } from '../../atoms/button'
// Functions
import { CommonFunctions } from '../../../functions/commonFunctions'
// Config
import { formList } from '../../../config/contactConfig'

// *************** Type *************** //
type Props = {
  error?: any
  setError: any
}

export const Form = (props: Props) => {
  // *************** Const *************** //
  const { commons } = CommonFunctions()

  // *************** JSX *************** //
  return (
    <div>
      <ul className="p-2">
        {formList.map((form: any, i: number) => (
          <li className="first:m-0 mt-5" key={i}>
            <Label
              className="cursor-pointer"
              htmlFor={form.name}
              text={form.label}
            />
            {form.tag === 'select' ? (
              <Select
                name={form.name}
                label={form.label}
                initialLabel={form.initialLabel}
                options={form.options}
                optionValue="value"
                optionLabel="label"
              />
            ) : form.tag === 'textarea' ? (
              <Textarea className="px-1 py-0.5" name={form.name} />
            ) : (
              <Input
                className="px-1 py-0.5 border-solid border-2 border-transparent transition ease-in duration-300
                  focus:border-crimson
                "
                name={form.name}
                type={form.type}
                functions={(e: React.ChangeEvent<HTMLInputElement>) => {
                  commons.checkValidation(
                    e.target.name,
                    form.label,
                    '',
                    e.target.value,
                    '',
                    props.setError
                  )
                }}
              />
            )}
            {props.error[form.name] && (
              <p className="text-crimson font-bold text-sm">
                {props.error[form.name]}
              </p>
            )}
          </li>
        ))}
      </ul>
      <Button
        className={`blackButton py-1 px-3
          ${
            !!Object.values(props.error).filter((error: any) => error).length &&
            'disabled'
          }
        `}
        text="送信"
        disabled={
          !!Object.values(props.error).filter((error: any) => error).length
        }
      />
    </div>
  )
}
