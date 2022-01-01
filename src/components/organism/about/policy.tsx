// Config
import { policyText } from '../../../config/aboutConfig'

export const Policy: React.VFC = () => (
  // *************** JSX *************** //
  <div className="w-3/5">
    <p>{policyText.en}</p>
    <p className="mt-5">{policyText.ja}</p>
  </div>
)
