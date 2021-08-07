// Modules
import React, { useState } from 'react'
// Components
import { Layout } from '../../layouts/layout'
import { Form } from '../../components/molecules/contact/form'
import { Section } from '../../components/molecules/common/section'
import { ContactWay } from '../../components/molecules/contact/contactWay'

export const Contact = () => {
  // *************** Const *************** //
  const [error, setError] = useState<any>({})

  // *************** JSX *************** //
  return (
    <Layout title="Contact">
      <main>
        <Section title="Form">
          <Form error={error} setError={setError} />
        </Section>
        <Section title="Contact">
          <ContactWay />
        </Section>
      </main>
    </Layout>
  )
}

export default Contact
