import { careerList } from '../../../../config/aboutConfig'
import { ExternalLink } from '../../../atoms/ExternalLink/ExternalLink'

export const Career = (): JSX.Element => {
  return (
    <ul>
      {careerList.map((list, i) => (
        <li key={i}>
          <p>
            {list.start} ~ {list.end && list.end}
          </p>
          <ExternalLink
            className="text-crimson font-bold"
            link={list.link}
            text={list.title}
            target
          />
        </li>
      ))}
    </ul>
  )
}
