import { Section } from '../../components/molecules/section'
import { Description } from '../../components/organism/works/discription'
import { UseColor } from '../../components/organism/works/useColor'
import { SaaSis } from '../../config/worksConfig'

import type { NextPage } from 'next'

const Work: NextPage = () => {
  return (
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
  )
}

export default Work
