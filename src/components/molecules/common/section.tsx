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
    <section
      className={`
        ${className}
        w-2/3 m-auto 
        md:flex md:justify-between md:w-4/5
      `}
    >
      <h2 className="font-bold text-3xl">{title}</h2>
      {children}
    </section>
  )
}
