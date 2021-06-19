// Modules
import React from "react"
// Components
import { Label } from "../../atoms/label"
import { Select } from "../../atoms/select"
import { Textarea } from "../../atoms/textarea"
import { Input } from "../../atoms/input"
import { Button } from "../../atoms/button"
// Config
import { formList } from "../../../config/contactConfig"
// Functions
import { CommonFunctions } from "../../../functions/commonFunctions"
// Styles
// import styles from '../../../styles/Home.module.scss'

// *************** Type *************** //
type Props = {
  error?: any
  setError: any
}

export const Form = (
  props: Props
) => {
  // *************** Const *************** //
  const { commons } = CommonFunctions()

  // *************** JSX *************** //
  return (
    <div>
      <ul>
        { formList.map((form: any, i: number) => (
          <li
            key={i}
          >
            <Label
              className="cursor-pointer"
              htmlFor={form.name}
              text={form.label}
            />
            { form.tag === 'select' ? (
              <Select
                name={form.name}
                label={form.label}
                initialLabel={form.initialLabel}
                options={form.options}
                optionValue="value"
                optionLabel="label"
              />
            ) : form.tag === 'textarea' ? (
              <Textarea
                name={form.name}
              />
            ) : (
              <Input
                name={form.name}
                type={form.type}
                function={(e: React.ChangeEvent<HTMLInputElement>) => {
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
            { props.error[form.name] && (
              <p className="text-red-600 font-bold text-sm">
                {props.error[form.name]}
              </p>
            )}
          </li>
        ))}
      </ul>
      <Button
        className={`py-1 px-3 bg-black text-white
          hover:bg-transparent hover:text-black hover:border-black
          ${!!Object.values(props.error).filter((error: any) => error).length && 'disabled'}
        `}
        text="送信"
        disabled={!!Object.values(props.error).filter((error: any) => error).length}
      />
    </div>
  )
}