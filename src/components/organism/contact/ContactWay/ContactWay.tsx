import { Body } from '@/components/fonts/Body'
import { CONTACT_LIST } from '../../../../config/contactConfig'
import { ExternalLink } from '../../../atoms/ExternalLink/ExternalLink'

import styles from './ContactWay.module.scss'

export const ContactWay = (): JSX.Element => {
  return (
    <ul>
      {CONTACT_LIST.map((contact) => (
        <li key={contact.label} className={styles.contactWayList}>
          <Body>{contact.label}:</Body>

          <ExternalLink
            className={styles.contactWayLink}
            link={contact.link}
            text={contact.text}
            target={contact.label !== 'E-mail'}
          />
        </li>
      ))}
    </ul>
  )
}
