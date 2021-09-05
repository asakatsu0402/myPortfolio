// Components
import { Section } from '../../../components/molecules/common/section'
import { Skill } from '../../../components/molecules/about/skill'
import { Policy } from '../../../components/molecules/about/policy'
import { Iam } from '../../../components/molecules/about/iam'
import { Career } from '../../../components/molecules/about/career'
import { Recruit } from '../../../components/molecules/about/recruit'

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
