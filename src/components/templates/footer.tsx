// Modules
import React from 'react'
// Components
import { ShareList } from './shareList'
import { DarkModeButton } from '../molecules/darkModeButton'

export const Footer: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <footer className="flexBetweenSet h-16 p-4">
      <ShareList />
      <DarkModeButton />
    </footer>
  )
}
