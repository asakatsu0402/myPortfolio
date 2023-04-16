// Components
import { AllSections } from '../../components/organism/about/allSections'
import { Layout } from '../../components/templates/layout'

import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Layout title="About">
      <main>
        <AllSections />
      </main>
    </Layout>
  )
}

export default About
