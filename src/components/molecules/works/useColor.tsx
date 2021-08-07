// Modules
import React from 'react'
// Components

// Interfaces
import { ColorsType } from '../../../interfaces/molecules/worksInterfaces'

export const UseColor: React.VFC<ColorsType> = ({ colors }: ColorsType) => {
  // *************** JSX *************** //
  return (
    <ul className="flexBetweenSet w-full">
      {colors.map((color: string, i: number) => (
        <li key={i} className="w-full">
          <div className="h-32 p-2" style={{ background: color }}>
            {color}
          </div>
        </li>
      ))}
    </ul>
  )
}
