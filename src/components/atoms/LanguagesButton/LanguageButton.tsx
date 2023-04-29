'use client'

import { useSetRecoilState } from 'recoil'

import { languageState } from '../../../recoil/atoms/languageModal'
import { Body } from '../../fonts/Body.font'
import { Button } from '../Button/Button'
import { FontAwesome } from '../FontAwesome.atom'

import styles from './LanguageButton.module.scss'

export const LanguageButton = (): JSX.Element => {
  const setIsLanguageModal = useSetRecoilState<boolean>(languageState)

  const handleOnModal = (): void => setIsLanguageModal(true)

  return (
    <Button className={styles.languageButton} type="button" functions={handleOnModal}>
      <div className={styles.countryFlag}>
        <FontAwesome icon={['fas', 'map-marker-alt']} />
      </div>
      <Body bold className={styles.localeText}>
        en
        {/* {locale} */}
      </Body>
    </Button>
  )
}
