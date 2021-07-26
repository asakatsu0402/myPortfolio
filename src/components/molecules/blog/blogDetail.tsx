// Modules
import React from "react"
import Image from "next/image"
// Components
import { TableContents } from "./tableContents"
// Functions
import { CommonFunctions } from "../../../functions/commonFunctions"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHistory } from "@fortawesome/free-solid-svg-icons"
import { ArticleShare } from "./articleShare"
// Styles
import styles from '../../../styles/blog.module.scss'

// *************** Type *************** //
type Props = {
  data?: any
}

export const BlogDetail: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const {
    updatedAt,
    title,
    tag,
    thumbnail,
    categories,
    body
  } = props.data
  const { commons } = CommonFunctions()

  // *************** Functions *************** //
  const list = commons.createContents(body)

  // *************** JSX *************** //
  return (
    <article>
      { thumbnail && (
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
          <h2 className="font-bold text-4xl">
            {title}
          </h2>
          <p>{categories.name}</p>
          <ul>
            { tag.map((t: any, i: number) => (
              <li
                key={i}
              >
                <p>{t}</p>
              </li>
            ))}
          </ul>
          <time className="flex items-center">
            <FontAwesomeIcon
              icon={faHistory}
            />
            <p className="flex items-center ml-1">
              {new Date(updatedAt).getFullYear()}/
              {new Date(updatedAt).getMonth()}/
              {new Date(updatedAt).getDate()}
            </p>
          </time>

          <TableContents
            data={list}
          />

          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={
              { __html: `${body}` }
            }
          />
        </div>
      </div>
    </article>
  )
}