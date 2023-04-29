export const metadata = {
  title: 'お問い合わせ | asakatsu'
}

import { Section } from '../../components/molecules/section'
import { ContactWay } from '../../components/organism/contact/contactWay'
import { FormWrap } from '../../components/organism/contact/formWrap'

import type { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <main>
      <Section title="Form">
        <FormWrap />
      </Section>
      <Section title="Contact">
        <ContactWay />
      </Section>
    </main>
  )
}

export default Contact
