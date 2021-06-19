// Modules
import React from "react"
// Config
import { iamText } from "../../../config/aboutConfig"

export const Iam: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <div className="w-3/5">
      <p className="first-letter:text-4xl">
        {iamText.ja}
      </p>
    </div>
  )
}