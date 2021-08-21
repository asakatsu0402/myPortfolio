// Components
import { Layout } from '../../layouts/layout'
import { PageHead } from '../../layouts/pageHead'
import { WorksList } from '../../components/molecules/works/worksList'

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
