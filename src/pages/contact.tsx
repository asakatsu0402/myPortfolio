// Modules
import React from "react"
// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
import { Form } from "../components/molecules/contact/form"
// Styles
// import styles from '../styles/Home.module.scss'

export const Contact = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="Contact"
      />
      <Form />
    </Layout>
  )
}

export default Contact