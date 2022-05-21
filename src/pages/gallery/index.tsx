// Components
import { Layout } from '../../components/templates/layout'
import { AllSections } from '../../components/organism/about/allSections'
// Types
import type { NextPage } from 'next'

export const Gallery: NextPage = () => {
  // *************** JSX *************** //
  return (
    <Layout title="Gallery">
      <main>
        <AllSections />
      </main>
    </Layout>
  )
}

export default Gallery
