// Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Components
import { ExternalLink } from '../atoms/ExternalLink.atom'
// Config
import { footerShare } from '../../config/layoutConfig'

export const ShareList: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <ul className="flexBetweenSet w-36">
      {footerShare.map((share, i) => (
        <li key={i}>
          <ExternalLink className="crimsonText" link={share.link} target={true}>
            <FontAwesomeIcon icon={share.icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
