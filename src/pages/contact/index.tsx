// Components
import { Layout } from '../../components/templates/layout'
import { FormWrap } from '../../components/organism/contact/formWrap'
import { Section } from '../../components/molecules/section'
import { ContactWay } from '../../components/organism/contact/contactWay'
// Types
import type { NextPage } from 'next'

export const Contact: NextPage = () => {
  // *************** JSX *************** //
  return (
    <Layout title="Contact">
      <main>
        <Section title="Form">
          <FormWrap />
        </Section>
        <Section title="Contact">
          <ContactWay />
        </Section>
      </main>
    </Layout>
  )
}

export default Contact
