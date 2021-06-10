// Modules
import React from "react"
import Link from "next/link"

// *************** Type *************** //
type Props = {
  list?: Array<any>
  className?: string
}

export const AllBlogs: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const { list } = props

  // *************** JSX *************** //
  return (
    <ul>
      { list.map((list: any, i: number) => (
        <li
          key={i}
          className={`${props.className} cursor-pointer`}
        >
          <Link
            href="/blog/[id]"
            as={`/blog/${list.id}`}
          >
            <div className="flex">
              { list.thumbnail && (
                <div className="w-1/3">
                  <img
                    src={list.thumbnail.url}
                    alt=""
                  />
                </div>
              )}
              <div>
                <h2 className="font-bold text-2xl">
                  {list.title}
                </h2>
                <ul>
                  { list.tag.map((tag: any, j: number) => (
                    <li
                      key={j}
                      className="inline-block p-1 rounded bg-red-800"
                    >
                      <p>{tag}</p>
                    </li>
                  ))}
                </ul>
                <p>{list.updatedAt}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}