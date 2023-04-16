import { WorksList } from '../../components/organism/works/worksList'
import { Layout } from '../../components/templates/layout'
import { PageHead } from '../../components/templates/pageHead'

import type { NextPage } from 'next'

const Works: NextPage = () => (
  <Layout>
    <PageHead title="Works" />
    <WorksList />
  </Layout>
)

export default Works
