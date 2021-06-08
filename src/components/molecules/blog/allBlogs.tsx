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
  // *************** JSX *************** //
  return (
    <ul>
      { props.list.map((list: any, i: number) => (
        <li
          key={i}
          className={`${props.className} cursor-pointer`}
        >
          <Link
            href={`blog/${list.id}`}
          >
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
          </Link>
        </li>
      ))}
    </ul>
  )
}