// Components
import { Layout } from '../../layouts/layout'
import { PageHead } from '../../layouts/pageHead'
import { Section } from '../../components/molecules/common/section'
import { Description } from '../../components/molecules/works/discription'
import { UseColor } from '../../components/molecules/works/useColor'
// Config
import { SaaSis } from '../../config/worksConfig'

export const Work = () => {
  // *************** JSX *************** //
  return (
    <Layout>
      <PageHead title={`Work - ${SaaSis.title}`} />
      <main>
        <h3>{SaaSis.title}</h3>
        <div>
          <Section className="exceptTopSection">
            <Description description={SaaSis.description} />
          </Section>
          <Section className="exceptTopSection">
            <UseColor colors={SaaSis.colors} />
          </Section>
        </div>
      </main>
    </Layout>
  )
}

export default Work
