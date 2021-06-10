// Modules
import React from "react"
// Components
import { Layout } from "../../layouts/layout"
import { PageHead } from "../../layouts/pageHead"
import { Form } from "../../components/molecules/contact/form"
import { Section } from "../../components/molecules/common/section"
import { ContactWay } from "../../components/molecules/contact/contactWay"
// Styles
// import styles from '../styles/Home.module.scss'

export const Index = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="Index"
      />
      <Section
        title="Form"
      >
        <Form />
      </Section>
      <Section
        title="Index"
      >
        <ContactWay />
      </Section>
    </Layout>
  )
}

export default Index