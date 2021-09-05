// Components
import { Layout } from '../../layouts/layout'
import { FormWrap } from '../../components/molecules/contact/formWrap'
import { Section } from '../../components/molecules/common/section'
import { ContactWay } from '../../components/molecules/contact/contactWay'

export const Contact = () => {
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
