// Modules
import React from "react"
// Components
import { PageLink } from "../../atoms/pageLink"

// *************** Type *************** //
type Props = { categories: any }

export const AllCategories: React.VFC<Props> = ({
  categories
}: Props) => {
  // *************** JSX *************** //
  return (
    <ul>
      { categories.map((category: any, i: number) => (
        <li
          key={i}
          className="border-b-2 last:border-b-0"
        >
          <PageLink
            className="block p-2.5"
            href={`/blog/category/${category.name}`}
            text={category.title}
          />
        </li>
      ))}
    </ul>
  )
}