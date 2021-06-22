// Modules
import React from "react"
// Components
import { TableContents } from "./tableContents"
// Functions
import { CommonFunctions } from "../../../functions/commonFunctions"
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHistory } from "@fortawesome/free-solid-svg-icons"
import { ArticleShare } from "./articleShare"

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
      <div className="w-1/2">
        <img
          src={thumbnail.url}
          alt=""
        />
      </div>

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
          <time>
            <FontAwesomeIcon
              icon={faHistory}
            />
            {updatedAt}
          </time>

          <TableContents
            data={list}
          />

          <div
            dangerouslySetInnerHTML={
              { __html: `${body}` }
            }
          />
        </div>
      </div>
    </article>
  )
}