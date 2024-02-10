import { contactList } from '../../../config/contactConfig'
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'

export const ContactWay = (): JSX.Element => {
  return (
    <ul>
      {contactList.map((contact: any, i: number) => (
        <li key={i} className="flex">
          <ExternalLink
            className="crimsonText"
            link={contact.link}
            text={`${contact.label} - ${contact.text}`}
            target={contact.label !== 'E-mail'}
          />
        </li>
      ))}
    </ul>
  )
}
