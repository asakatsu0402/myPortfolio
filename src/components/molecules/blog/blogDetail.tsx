// Modules
import React from "react"

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
    categories
  } = props.data

  // *************** JSX *************** //
  return (
    <article>
      <div className="w-1/2">
        <img
          src={thumbnail.url}
          alt=""
        />
      </div>
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
      <p>{updatedAt}</p>
    </article>
  )
}