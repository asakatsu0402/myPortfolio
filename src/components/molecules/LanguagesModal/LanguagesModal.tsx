'use client'

import { useEffect } from 'react'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'

import { languages } from '../../../config/commonConfig'
import { languageState } from '../../../recoil/atoms/languageModal'
import { Button } from '../../atoms/Button/Button'
import { FontAwesome } from '../../atoms/FontAwesome/FontAwesome'
import { PageLink } from '../../atoms/PageLink/PageLink'
import { Text } from '../../atoms/Text/Text'
import { Body } from '../../fonts/Body'
import { H2 } from '../../fonts/H2'

import styles from './LanguagesModal.module.scss'

export const LanguagesModal = (): JSX.Element => {
  const pathname = usePathname()
  const [isLanguageModal, setIsLanguageModal] = useRecoilState<boolean>(languageState)

  const handleCloseModal = () => setIsLanguageModal(false)

  // TODO localeを依存係数に入れる
  useEffect(() => {
    handleCloseModal()
  }, [])

  return (
    <div
      className={clsx([
        styles.languagesModal,
        isLanguageModal && styles.on
        // TODO 時差でアニメーション用クラスを付与する
        // isLanguageModal && setTimeout(() => styles.show, 500)
      ])}
    >
      <Button className={styles.closeButton} type="button" functions={handleCloseModal}>
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
                // asPath={asPath}
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
