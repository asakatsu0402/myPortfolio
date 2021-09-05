// Components
import { ExternalLink } from '../../atoms/externalLink'
// Config
import { contactList } from '../../../config/contactConfig'

export const ContactWay = () => {
  // *************** JSX *************** //
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
