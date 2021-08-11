// Modules
import React from 'react'
// Config
import { policyText } from '../../../config/aboutConfig'

export const Policy: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <div className="w-3/5">
      <p>{policyText.en}</p>
      <p className="mt-5">{policyText.ja}</p>
    </div>
  )
}
