import { Section } from '../../../molecules/Section/Section'
import { Career } from '../Career'
import { Skill } from '../Skill'
import { Iam } from '../iam'
import { Policy } from '../policy'
import { Recruit } from '../recruit'

export const AllSections = (): JSX.Element => {
  const sections = [
    {
      className: 'flexReverse',
      component: <Policy />,
      title: 'Promise'
    },
    {
      className: 'flexBetween',
      component: <Iam />,
      title: 'I am a ...'
    },
    {
      className: 'flexReverse',
      component: <Skill />,
      title: 'Skill'
    },
    {
      className: 'flexBetween',
      component: <Career />,
      title: 'Career'
    },
    {
      className: 'flexReverse',
      component: <Recruit />,
      title: 'Recruit'
    }
  ]

  return (
    <div>
      {sections.map((section, i) => (
        <Section className={section.className} key={i} title={section.title}>
          {section.component}
        </Section>
      ))}
    </div>
  )
}
