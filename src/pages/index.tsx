// Components
import { Layout } from '../components/templates/layout'
import { PageHead } from '../components/templates/pageHead'
import { Top } from '../components/organism/top/top'

export const Home: React.VFC = () => (
  // *************** JSX *************** //
  <Layout>
    <PageHead title="" />
    <Top />
  </Layout>
)

export default Home
