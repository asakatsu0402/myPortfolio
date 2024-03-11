export const metadata = {
  title: 'お問い合わせ | asakatsu'
}

import { Main } from '@/components/templates/Main'
import { Section } from '../../components/molecules/Section/Section'
import { ContactWay } from '../../components/organism/contact/contactWay'
import { FormWrap } from '../../components/organism/contact/formWrap'

import type { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <Main>
      <Section title="Form">
        <FormWrap />
      </Section>

      <Section title="Contact">
        <ContactWay />
      </Section>
    </Main>
  )
}

export default Contact
