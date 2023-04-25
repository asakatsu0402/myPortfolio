import { DarkModeButton } from '../../atoms/DarkModeButton/DarkModeButton'
import { ShareList } from '../ShareList'

export const Footer = (): JSX.Element => {
  return (
    <footer className="flexBetweenSet h-16 p-4">
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}
