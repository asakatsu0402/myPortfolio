// Modules
import React from 'react'
import Image from 'next/image'
// Components
import { Toc } from './toc'
import { ArticleShare } from './articleShare'
// Interfaces
import { blogContent } from '../../../interfaces/molecules/blogInterfaces'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
// Styles
import styles from '../../../styles/blog.module.scss'

export const BlogDetail: React.VFC<blogContent> = ({
  updatedAt,
  title,
  tag,
  thumbnail,
  categories,
  body,
  toc_visible,
  toc
}: blogContent) => {
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
      <div className="flex">
        <ArticleShare
          // url={}
          title={title}
        />

        <div>
          <h2 className="font-bold text-4xl">{title}</h2>
          <p>{categories.name}</p>
          <ul>
            {tag.map((t: any, i: number) => (
              <li key={i}>
                <p>{t}</p>
              </li>
            ))}
          </ul>
          <time className="flex items-center">
            <FontAwesomeIcon icon={faHistory} />
            <p className="flex items-center ml-1">
              {new Date(updatedAt).getFullYear()}/
              {new Date(updatedAt).getMonth()}/{new Date(updatedAt).getDate()}
            </p>
          </time>

          {toc_visible && <Toc toc={toc} />}

          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: `${body}` }}
          />
        </div>
      </div>
    </article>
  )
}
