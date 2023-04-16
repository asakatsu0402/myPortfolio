// Components
import { Section } from '../../components/molecules/section'
import { Description } from '../../components/organism/works/discription'
import { UseColor } from '../../components/organism/works/useColor'
import { Layout } from '../../components/templates/layout'
import { PageHead } from '../../components/templates/pageHead'
// Config
import { SaaSis } from '../../config/worksConfig'

import type { NextPage } from 'next'

const Work: NextPage = () => {
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
