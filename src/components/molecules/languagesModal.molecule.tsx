// Modules
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
// Components
import { Button } from '../atoms/Button.atom'
import { FontAwesome } from '../atoms/FontAwesome.atom'
import { H2 } from '../fonts/H2.font'
import { Text } from '../atoms/Text.atom'
import { PageLink } from '../atoms/PageLink.atom'
import { Body } from '../fonts/Body.font'
// Stores
import { languageSlice } from '../../redux/stores/language'
import { customSelector } from '../../redux'
import { languageSelector } from '../../redux/selectors/language.selector'
// Config
import { languages } from '../../config/commonConfig'
// Style
import styles from './languagesModal.module.scss'

export const LanguagesModal: React.VFC = () => {
  // *************** Const *************** //
  const { pathname, asPath, locale } = useRouter()
  const dispatch = useDispatch()
  const languageOn = customSelector(languageSelector)

  // *************** useEffect *************** //
  useEffect(() => {
    dispatch(languageSlice.actions.setLanguage(false))
  }, [locale])

  // *************** JSX *************** //
  return (
    <div className={`${styles.languagesModal} ${languageOn ? styles.on : ''}`}>
      <Button
        className={styles.closeButton}
        type="button"
        functions={(): void => {
          dispatch(languageSlice.actions.setLanguage(false))
        }}
      >
        <FontAwesome icon={['fas', 'times']} />
      </Button>
      <div className={styles.languageWrap}>
        <H2 bold className={styles.modalTitle}>
          <Text text="selectLanguages" />
        </H2>
        <ul className={styles.languageList}>
          {languages.map((language, i) => (
            <li key={i}>
              <PageLink
                className={styles.languageButton}
                href={pathname}
                asPath={asPath}
                locale={language.code}
              >
                <div className={styles.pinIcon}>
                  <FontAwesome icon={['fas', 'map-marker-alt']} />
                </div>
                <Body bold className={styles.languageText}>
                  {language.language}
                </Body>
              </PageLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
