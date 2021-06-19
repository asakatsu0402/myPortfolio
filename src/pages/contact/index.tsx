// Modules
import React, {
  useState
} from "react"
// Components
import { Layout } from "../../layouts/layout"
import { PageHead } from "../../layouts/pageHead"
import { Form } from "../../components/molecules/contact/form"
import { Section } from "../../components/molecules/common/section"
import { ContactWay } from "../../components/molecules/contact/contactWay"
// Styles
// import styles from '../styles/Home.module.scss'

export const Contact = () => {
  // *************** Const *************** //
  const [error, setError] = useState<any>({})
  console.log (error)
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="Contact"
      />
      <main>
        <Section
          title="Form"
        >
          <Form
            error={error}
            setError={setError}
          />
        </Section>
        <Section
          title="Contact"
        >
          <ContactWay />
        </Section>
      </main>
    </Layout>
  )
}

export default Contact