import { PageLink } from '../../../atoms/PageLink/PageLink'

type Props = { categories: any }

export const AllCategories: React.FC<Props> = ({ categories }: Props) => {
  return (
    <ul>
      {categories &&
        categories.map((category, i: number) => (
          <li key={i} className="border-b-2 last:border-b-0">
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
