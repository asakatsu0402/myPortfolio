import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { footerShare } from '../../../config/layoutConfig'
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'

import styles from './ShareList.module.scss'

export const ShareList = (): JSX.Element => {
  return (
    <ul className={styles.footerShareList}>
      {footerShare.map((share, i) => (
        <li key={i} className={styles.shareBlock}>
          <ExternalLink className={styles.shareIcon} link={share.link} target>
            <FontAwesomeIcon icon={share.icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
