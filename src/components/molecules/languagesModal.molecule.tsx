'use client'

import { useEffect } from 'react'

import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import { languages } from '../../config/commonConfig'
import { languageState } from '../../recoil/atoms/languageModal'
import { Button } from '../atoms/Button.atom'
import { FontAwesome } from '../atoms/FontAwesome.atom'
import { PageLink } from '../atoms/PageLink.atom'
import { Text } from '../atoms/Text.atom'
import { Body } from '../fonts/Body.font'
import { H2 } from '../fonts/H2.font'

import styles from './languagesModal.module.scss'

export const LanguagesModal = (): JSX.Element => {
  const { pathname, asPath, locale } = useRouter()
  const [isLanguageModal, setIsLanguageModal] = useRecoilState<boolean>(languageState)

  const handleCloseModal = () => setIsLanguageModal(false)

  useEffect(() => {
    handleCloseModal()
  }, [locale])

  return (
    <div className={clsx([styles.languagesModal, isLanguageModal && styles.on])}>
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
