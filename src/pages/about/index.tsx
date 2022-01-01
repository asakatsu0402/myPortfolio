// Components
import { Layout } from '../../components/templates/layout'
import { AllSections } from '../../components/organism/about/allSections'

export const About = () => {
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
