// Components
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'
// Config
import { careerList } from '../../../config/aboutConfig'

export const Career: React.VFC = () => {
  // *************** JSX *************** //
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
            target={true}
          />
        </li>
      ))}
    </ul>
  )
}
