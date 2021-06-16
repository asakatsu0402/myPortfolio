// Modules
import React from "react"
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
          <ul>
            { skill.library && skill.library.map((library: any, j: number) => (
              <li
                key={j}
              >
                <p>{library.title}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}