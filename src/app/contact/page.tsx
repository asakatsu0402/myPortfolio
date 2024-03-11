export const metadata = {
  title: 'お問い合わせ | asakatsu'
}

import { Main } from '@/components/templates/Main'
import { Section } from '../../components/molecules/Section/Section'
import { ContactWay } from '@/components/organism/contact/ContactWay'
import { Body } from '@/components/fonts/Body'

import type { NextPage } from 'next'

import styles from './Contact.module.scss'

const Contact: NextPage = () => {
  return (
    <Main>
      <Section title="Contact">
        <div className={styles.contactWayBlock}>
          <ContactWay />
        </div>
      </Section>

      <div className={styles.messageBlock}>
        <Body fontSize="x-small">
          広告、雑誌、書籍、プロジェクトの撮影など承ります。作品の使用や掲載、取材、執筆のご依頼もこちらからご連絡ください。
          <br />
        </Body>

        <Body fontSize="x-small">ブライダル、個人様の撮影は承っておりません。</Body>
      </div>
    </Main>
  )
}

export default Contact
