// Modules
import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"

// *************** Type *************** //
type Props = {
  title?: string
}

export const BreadList: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const router = useRouter()
  const path = router.asPath
  const isPage = /\/blog\/.+$/.test(path)

  // *************** JSX *************** //
  return (
    <ul className="flex">
      <li>
        <Link
          href='/blog'
        >
          asakatsu Blog
        </Link>
      </li>
      { isPage && (
        <li>
          {/*<Link*/}
          {/*  href={`/category/[id]`}*/}
          {/*>*/}

          {/*</Link>*/}
        </li>
      )}
      <li>
        <p>
          {props.title}
        </p>
      </li>
    </ul>
  )
}