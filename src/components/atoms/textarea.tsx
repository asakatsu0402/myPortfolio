// Modules
import React from "react"
// Interfaces
import { textarea } from "../../interfaces/atomInterfaces"

export const Textarea: React.VFC<textarea> = ({
  className,
  name,
  placeholder,
  disabled,
  functions
}: textarea) => (
  // *************** JSX *************** //
  <textarea
    className={className}
    id={name}
    name={name}
    placeholder={placeholder}
    disabled={!!disabled}
    onChange={functions}
  />
)