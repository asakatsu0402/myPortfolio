import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PageLink } from '../../../atoms/PageLink/PageLink'

type Props = {
  id?: string | undefined
  title?: string | undefined
}

export const Breadcrumbs: React.FC<Props> = ({ title, id }: Props) => {
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
