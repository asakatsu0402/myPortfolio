// Components
import { Layout } from '../../components/templates/layout'
import { PageHead } from '../../components/templates/pageHead'
import { Section } from '../../components/molecules/section'
import { Description } from '../../components/organism/works/discription'
import { UseColor } from '../../components/organism/works/useColor'
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
