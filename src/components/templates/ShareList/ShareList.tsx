import { SNS_SHARE } from '../../../config/layoutConfig'
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'
import { FontAwesome } from '@/components/atoms/FontAwesome'

import styles from './ShareList.module.scss'

export const ShareList = (): JSX.Element => {
  return (
    <ul className={styles.footerShareList}>
      {SNS_SHARE.map((share, i) => (
        <li key={i} className={styles.shareBlock}>
          <ExternalLink className={styles.shareIcon} link={share.link} target>
            <FontAwesome icon={[share.prefix, share.icon]} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
