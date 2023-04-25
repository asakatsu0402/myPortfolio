// Components
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'
// Config
import { recruitMessage } from '../../../config/aboutConfig'

export const Recruit: React.VFC = () => (
  // *************** JSX *************** //
  <div>
    <p>{recruitMessage}</p>
    <ExternalLink
      className="crimsonButton inline-block p-2"
      link="./Excel申請書テンプレ.png"
      text="Download PDF"
      downLoad="履歴書"
    />
  </div>
)
