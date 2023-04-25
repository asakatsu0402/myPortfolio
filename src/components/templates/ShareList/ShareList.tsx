import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { footerShare } from '../../../config/layoutConfig'
import { ExternalLink } from '../../atoms/ExternalLink.atom'

export const ShareList = (): JSX.Element => {
  return (
    <ul className="flexBetweenSet w-36">
      {footerShare.map((share, i) => (
        <li key={i}>
          <ExternalLink className="crimsonText" link={share.link} target>
            <FontAwesomeIcon icon={share.icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
