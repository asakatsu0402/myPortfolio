// Modules
import React from 'react'
// Interfaces
import { DescriptionType } from '../../../interfaces/molecules/worksInterfaces'

export const Description: React.VFC<DescriptionType> = ({
  description
}: DescriptionType) => {
  // *************** JSX *************** //
  return (
    <div className="flexAroundSet w-full">
      <div>
        <dl className="flexBetweenSet">
          <dt>Role</dt>
          <dd className="ml-5">{description.role}</dd>
        </dl>
        <dl className="flexBetweenSet">
          <dt>Deliverable</dt>
          <dd className="ml-5">{description.deliverable}</dd>
        </dl>
        <dl className="flexBetweenSet">
          <dt>Date</dt>
          <dd className="ml-5">{description.date}</dd>
        </dl>
      </div>
      <p className="w-96">{description.text}</p>
    </div>
  )
}
