// Modules
import React from "react"
// Components
import { ContactLink } from "../../atoms/contactLink"
import { ExternalLink } from "../../atoms/externalLink"
// Config
import { contactList } from "../../../config/contactConfig"

export const ContactWay = () => {
  // *************** JSX *************** //
  return (
    <ul>
      { contactList.map((contact: any, i: number) => (
        <li
          key={i}
          className="flex"
        >
          { contact.label === 'E-mail' ? (
            <ContactLink
              link={contact.link}
              text={`${contact.label} - ${contact.text}`}
            />
          ) : (
            <ExternalLink
              link={contact.link}
              text={`${contact.label} - ${contact.text}`}
            />
          )}
        </li>
      ))}
    </ul>
  )
}