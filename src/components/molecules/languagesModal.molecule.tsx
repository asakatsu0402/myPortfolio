// Modules
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
// Components
import { Button } from '../atoms/button'
import { FontAwesome } from '../atoms/fontAwesome'
import { H2 } from '../atoms/h2.atom'
import { Text } from '../atoms/text'
import { PageLink } from '../atoms/pageLink'
import { Body } from '../atoms/body.atom'
// Config
import { languages } from '../../config/commonConfig'
import { languageState } from '../../recoil/atoms/languageModal.atom'
// Style
import styles from './languagesModal.module.scss'

export const LanguagesModal: React.VFC = () => {
  // *************** Const *************** //
  const { pathname, asPath, locale } = useRouter()
  const [languageOn, setLanguageOn] = useRecoilState(languageState)

  // *************** useEffect *************** //
  useEffect(() => setLanguageOn(false), [locale])

  // *************** JSX *************** //
  return (
    <div className={`${styles.languagesModal} ${languageOn ? styles.on : ''}`}>
      <Button
        className={styles.closeButton}
        type="button"
        functions={(): void => setLanguageOn(false)}
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
