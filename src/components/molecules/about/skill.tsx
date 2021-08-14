// Modules
import React from 'react'
// Config
import {
  languages,
  frameworks,
  libraries,
  tools
} from '../../../config/aboutConfig'

export const Skill: React.VFC = () => {
  // *************** JSX *************** //
  return (
    <div className="flexAroundSet">
      <ul>
        {languages.map((language: any, i: number) => (
          <li key={i} className="exceptTopMargin">
            <p className="technologyTag p-1">{language.label}</p>
          </li>
        ))}
      </ul>
      <ul>
        {frameworks.map((frame: any, j: number) => (
          <li key={j} className="exceptTopMargin">
            <p className="frameworkTag p-1">{frame.label}</p>
          </li>
        ))}
      </ul>
      <ul>
        {libraries.map((library: any, k: number) => (
          <li key={k} className="exceptTopMargin">
            <p className="libraryTag p-1">{library.label}</p>
          </li>
        ))}
      </ul>
      <ul>
        {tools.map((tool: any, l: number) => (
          <li key={l} className="exceptTopMargin">
            <p className="toolTag p-1">{tool.label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
