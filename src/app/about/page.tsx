export const metadata = {
  title: '朝活について | asakatsu'
}

import { AllSections } from '../../components/organism/about/allSections'

import type { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <main>
      <AllSections />
    </main>
  )
}

export default About
