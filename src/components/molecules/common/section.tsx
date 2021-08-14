// Modules
import React from 'react'
// Interfaces
import { SectionType } from '../../../interfaces/molecules/molecules'

export const Section: React.VFC<SectionType> = ({
  className,
  title,
  children
}: SectionType) => {
  // *************** JSX *************** //
  return (
    <section className={`exceptTopSection ${className}`}>
      <h2 className="text-3xl">{title}</h2>
      {children}
    </section>
  )
}
