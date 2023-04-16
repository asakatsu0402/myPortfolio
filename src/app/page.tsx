import { Top } from '../components/organism/top/top'
import { Layout } from '../components/templates/layout'
import { PageHead } from '../components/templates/pageHead'

import type { NextPage } from 'next'

const Page: NextPage = () => (
  <Layout>
    <PageHead title="" />
    <Top />
  </Layout>
)

export default Page
