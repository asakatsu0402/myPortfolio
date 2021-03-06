// Components
import { Layout } from '../../components/templates/layout'
import { AllSections } from '../../components/organism/about/allSections'
// Types
import type { NextPage } from 'next'

export const About: NextPage = () => {
  // *************** JSX *************** //
  return (
    <Layout title="About">
      <main>
        <AllSections />
      </main>
    </Layout>
  )
}

export default About
