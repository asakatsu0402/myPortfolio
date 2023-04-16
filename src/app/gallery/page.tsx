// Components
import { AllSections } from '../../components/organism/about/allSections'
import { Layout } from '../../components/templates/layout'

import type { NextPage } from 'next'

export const Gallery: NextPage = () => {
  return (
    <Layout title="Gallery">
      <main>
        <AllSections />
      </main>
    </Layout>
  )
}

export default Gallery
