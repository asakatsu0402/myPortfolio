// Modules
import React from 'react'
// Components
import { Layout } from '../../layouts/layout'
import { Section } from '../../components/molecules/common/section'
import { Skill } from '../../components/molecules/about/skill'
import { Policy } from '../../components/molecules/about/policy'
import { Iam } from '../../components/molecules/about/iam'
import { Career } from '../../components/molecules/about/career'

export const About = () => {
  // *************** JSX *************** //
  return (
    <Layout title="About">
      <main>
        <Section className="flex-row-reverse" title="Promise">
          <Policy />
        </Section>
        <Section className="mt-52" title="I am a ...">
          <Iam />
        </Section>
        <Section className="flex-row-reverse mt-52" title="Skill">
          <Skill />
        </Section>
        <Section className="mt-52" title="Career">
          <Career />
        </Section>
      </main>
    </Layout>
  )
}

export default About
