// Modules
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// FontAwesome
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// *************** Type *************** //
type Props = {
  list?: Array<any>
  className?: string
}

export const AllBlogs: React.VFC<Props> = (props: Props) => {
  // *************** Const *************** //
  const { list } = props

  // *************** JSX *************** //
  return (
    <ul>
      {list.map((list: any, i: number) => (
        <li key={i} className={`${props.className} cursor-pointer`}>
          <Link href="/blog/[id]" as={`/blog/${list.id}`}>
            <div className="flex">
              <Image
                className="object-contain"
                src={list.thumbnail ? list.thumbnail.url : '/no_image.png'}
                alt={list.thumbnail ? list.title : 'No Image'}
                width="500"
                height="250"
              />
              <div>
                <h2 className="font-bold text-2xl">{list.title}</h2>
                <p className="inline-block p-1 rounded bg-crimson">
                  {list.categories.title}
                </p>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faHistory} />
                  <p className="ml-1">
                    {new Date(list.updatedAt).getFullYear()}/
                    {new Date(list.updatedAt).getMonth()}/
                    {new Date(list.updatedAt).getDate()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
