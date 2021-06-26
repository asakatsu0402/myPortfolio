// Modules
import React from "react"
import Link from "next/link"
import Image from "next/image"
// FontAwesome
import { faHistory } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
              <Image
                className="object-contain"
                src={ list.thumbnail ? list.thumbnail.url : "/no_image.png" }
                alt={ list.thumbnail ? list.title : "No Image" }
                width="500"
                height="250"
              />
              <div>
                <h2 className="font-bold text-2xl">
                  {list.title}
                </h2>
                <p>{ list.categories.name }</p>
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
                <p>
                  <FontAwesomeIcon
                    icon={faHistory}
                  />
                  {list.updatedAt}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}