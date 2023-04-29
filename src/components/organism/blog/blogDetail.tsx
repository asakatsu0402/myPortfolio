// Modules
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
// Components
import { Toc } from './toc'
import { Share } from './share'
import { Breadcrumbs } from './BreadCrumbs/BreadCrumbs'
// Types
import type { BlogDetailType } from '../../../types/organism/blogInterfaces'
// Styles
import styles from '../../../styles/blog.module.scss'

export const BlogDetail: React.VFC<BlogDetailType> = ({
  id,
  updatedAt,
  title,
  tag,
  thumbnail,
  categories,
  body,
  toc_visible,
  toc
}: BlogDetailType) => {
  // *************** JSX *************** //
  return (
    <article>
      {thumbnail && (
        <Image
          className="object-contain"
          src={thumbnail.url}
          alt={title}
          width="1000"
          height="500"
        />
      )}
      <Breadcrumbs title={title} id={id} />
      <div className="flex mt-10">
        <Share id={id} title={title} />
        <div>
          <h2 className="font-bold text-4xl">{title}</h2>
          <p>{categories.name}</p>
          <ul>
            {tag.map((t, i) => (
              <li key={i}>
                <p>{t}</p>
              </li>
            ))}
          </ul>
          <time className="flexSet">
            <FontAwesomeIcon icon={faHistory} />
            <p className="flexSet ml-1">
              {new Date(updatedAt).getFullYear()}/{new Date(updatedAt).getMonth()}/
              {new Date(updatedAt).getDate()}
            </p>
          </time>

          {toc_visible && <Toc toc={toc} />}

          <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: `${body}` }} />
        </div>
      </div>
    </article>
  )
}
