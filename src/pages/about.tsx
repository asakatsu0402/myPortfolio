// Modules
import React from "react"
// Components
import { Layout } from "../layouts/layout"
import { Top } from "../components/molecules/common/top"
import { PageHead } from "../layouts/pageHead"
import { Section } from "../components/molecules/common/section"
import { Skill } from "../components/molecules/about/skill"
import { Policy } from "../components/molecules/about/policy"
// Styles
// import styles from '../styles/Home.module.scss'

export const About = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="About"
      />
      <Top />
      <Section
        title="Skill"
      >
        <Skill />
      </Section>
      <Section
        title="Promise"
      >
        <Policy />
      </Section>
    </Layout>
  )
}

export default About