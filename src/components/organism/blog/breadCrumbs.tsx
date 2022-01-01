// Modules
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
// Components
import { PageLink } from '../../atoms/pageLink'
// Interfaces
import { BreadcrumbsType } from '../../../interfaces/molecules/blogInterfaces'

export const Breadcrumbs: React.VFC<BreadcrumbsType> = ({
  title,
  id
}: BreadcrumbsType) => {
  // *************** JSX *************** //
  return (
    <ul className="flexSet">
      <li>
        <PageLink className="linkText" href="/blog" text="記事一覧" />
      </li>
      {title && id && (
        <li className="flexSet">
          <p className="linkText mx-2">
            <FontAwesomeIcon icon={faCaretRight} />
          </p>
          <PageLink className="linkText" href={`/blog/${id}`} text={title} />
        </li>
      )}
    </ul>
  )
}
