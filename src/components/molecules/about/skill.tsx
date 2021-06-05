// Modules
import React from "react"
// Components

// Config
import { skillList } from "../../../config/aboutConfig"

export const Skill: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <ul className="flex">
      { skillList.map((skill: any, i: number) => (
        <li
          key={i}
          className=""
        >
          <p>{skill.label}</p>
        </li>
      ))}
    </ul>
  )
}