// Modules
import React from "react"
// Components
import { Layout } from "../../layouts/layout"
import { Top } from "../../components/molecules/common/top"
import { PageHead } from "../../layouts/pageHead"
import { Section } from "../../components/molecules/common/section"
import { Skill } from "../../components/molecules/about/skill"
import { Policy } from "../../components/molecules/about/policy"
import { Iam } from "../../components/molecules/about/iam"
import { Career } from "../../components/molecules/about/career"
// Styles
// import styles from '../styles/Home.module.scss'

export const Index = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="About"
      />
      <main>
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
        <Section
          title="I am a ..."
        >
          <Iam />
        </Section>
        <Section
          title="Career"
        >
          <Career />
        </Section>
      </main>
    </Layout>
  )
}

export default Index