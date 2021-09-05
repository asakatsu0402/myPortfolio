// Components
import { Layout } from '../../layouts/layout'
import { AllSections } from '../../components/molecules/about/allSections'

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
