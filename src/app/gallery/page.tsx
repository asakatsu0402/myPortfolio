export const metadata = {
  title: 'ギャラリー | asakatsu'
}

import { AllSections } from '../../../components/organism/about/allSections'

import type { NextPage } from 'next'

const Gallery: NextPage = () => {
  return (
    <main>
      <AllSections />
    </main>
  )
}

export default Gallery
