import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  list?: Array<any>
  className?: string
}

export const PhotoList: React.FC<Props> = ({ list, className }: Props) => {
  return (
    <ul>
      {list &&
        list.map((list, i: number) => (
          <li key={i} className={clsx(['exceptTopBlog', className, 'cursor-pointer'])}>
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
                  <p className="inline-block p-1 rounded bg-crimson">{list.categories.title}</p>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faHistory} />
                    <p className="ml-1">
                      {new Date(list.updatedAt).getFullYear()}/{new Date(list.updatedAt).getMonth()}
                      /{new Date(list.updatedAt).getDate()}
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
