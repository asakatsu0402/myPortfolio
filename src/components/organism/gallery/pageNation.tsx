import { PageLink } from '../../atoms/PageLink/PageLink'

type Props = {
  data?: any
  total?: number
}

export const PageNation: React.FC<Props> = (props: Props) => {
  const perPage = 5
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  // *************** JSX *************** //
  return (
    <ul className="flex">
      {range(1, Math.ceil(props.total / perPage)).map((number, i) => (
        <li key={i}>
          <PageLink
            className="inline-block py-2 px-4 rounded-lg bg-crimson"
            href={`/blog/page/${number}`}
            text={number}
          />
        </li>
      ))}
    </ul>
  )
}
