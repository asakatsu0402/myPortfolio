// Modules
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
// Components
import { Button } from '../atoms/button'
import { FontAwesome } from '../atoms/fontAwesome'
import { Body } from '../atoms/body.atom'
// Config
import { languageState } from '../../recoil/atoms/languageModal.atom'
// Style
import styles from './languageButton.module.scss'

export const LanguageButton: React.VFC = () => {
  // *************** Const *************** //
  const { locale } = useRouter()
  const [languageOn, setLanguageOn] = useRecoilState(languageState)

  // *************** JSX *************** //
  return (
    <Button
      className={styles.languageButton}
      type="button"
      functions={(): void => setLanguageOn(!languageOn)}
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
