import { DarkModeButton } from '../../molecules/DarkModeButton.molecule'
import { ShareList } from '../shareList'

export const Footer = (): JSX.Element => {
  return (
    <footer className="flexBetweenSet h-16 p-4">
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}
