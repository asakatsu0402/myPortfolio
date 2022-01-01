// Components
import { Layout } from '../../components/templates/layout'
import { PageHead } from '../../components/templates/pageHead'
import { WorksList } from '../../components/organism/works/worksList'

export const Index = () => {
  // *************** JSX *************** //
  return (
    <Layout>
      <PageHead title="Works" />
      <WorksList />
    </Layout>
  )
}

export default Index
