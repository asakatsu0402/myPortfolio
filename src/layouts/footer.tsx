// Modules
import React from 'react'
// Components
import { ShareList } from '../components/molecules/layouts/shareList'
import { DarkModeButton } from '../components/molecules/common/darkModeButton'

export const Footer = () => {
  // *************** JSX *************** //
  return (
    <footer className="flexBetweenSet h-16 p-4">
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}
