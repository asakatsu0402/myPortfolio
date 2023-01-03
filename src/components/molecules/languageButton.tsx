// Modules
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
// Components
import { Button } from '../atoms/Button.atom'
import { FontAwesome } from '../atoms/FontAwesome.atom'
import { Body } from '../fonts/Body.font'
// Stores
import { languageSlice } from '../../redux/stores/language'
// Style
import styles from './languageButton.module.scss'

export const LanguageButton = (): JSX.Element => {
  const { locale } = useRouter()
  const dispatch = useDispatch()

  return (
    <Button
      className={styles.languageButton}
      type="button"
      functions={(): void => {
        dispatch(languageSlice.actions.setLanguage(true))
      }}
    >
      <div className={styles.countryFlag}>
        <FontAwesome icon={['fas', 'map-marker-alt']} />
      </div>
      <Body bold className={styles.localeText}>
        {locale}
      </Body>
    </Button>
  )
}
