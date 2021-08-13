// Modules
import React from 'react'
// Components
import { Layout } from '../layouts/layout'
import { PageHead } from '../layouts/pageHead'
import { Top } from '../components/molecules/common/top'

export const Home: React.VFC = () => (
  // *************** JSX *************** //
  <Layout>
    <PageHead title="" />
    <Top />
  </Layout>
)

export default Home
