// Components
import { Section } from '../../molecules/section'
import { Skill } from './skill'
import { Policy } from './policy'
import { Iam } from './iam'
import { Career } from './career'
import { Recruit } from './recruit'

export const AllSections = () => {
  // *************** Const *************** //
  const sections = [
    {
      className: 'flexReverse',
      title: 'Promise',
      component: <Policy />
    },
    {
      className: 'flexBetween',
      title: 'I am a ...',
      component: <Iam />
    },
    {
      className: 'flexReverse',
      title: 'Skill',
      component: <Skill />
    },
    {
      className: 'flexBetween',
      title: 'Career',
      component: <Career />
    },
    {
      className: 'flexReverse',
      title: 'Recruit',
      component: <Recruit />
    }
  ]

  // *************** JSX *************** //
  return (
    <div>
      {sections.map((section: any, i: number) => (
        <Section className={section.className} key={i} title={section.title}>
          {section.component}
        </Section>
      ))}
    </div>
  )
}
