// Modules
import React from "react"
// Components
import { Label } from "../../atoms/label"
import { Select } from "../../atoms/select"
import { Textarea } from "../../atoms/textarea"
import { Input } from "../../atoms/input"
// Config
import { formList } from "../../../config/contactConfig"
// Styles
// import styles from '../../../styles/Home.module.scss'

export const Form = () => {
  // *************** JSX *************** //
  return (
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
            />
          )}
        </li>
      ))}
    </ul>
  )
}