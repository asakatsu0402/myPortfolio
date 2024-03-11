export const metadata = {
  title: 'about | asakatsu'
}

import { Main } from '@/components/templates/Main'
import { AllSections } from '../../components/organism/about/AllSections/AllSections'

import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Main>
      <AllSections />
    </Main>
  )
}

export default About
