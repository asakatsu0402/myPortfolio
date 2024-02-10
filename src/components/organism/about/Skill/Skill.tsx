import clsx from 'clsx'

import { languages, frameworks, libraries, tools } from '../../../../config/aboutConfig'

import styles from './Skill.module.scss'

export const Skill = (): JSX.Element => {
  return (
    <div className={styles.skillWrap}>
      <ul className={styles.skillBlock}>
        {languages.map((language, i) => (
          <li key={i} className={styles.skillList}>
            <p className={clsx([styles.technology, styles.skillTag])}>{language.label}</p>
          </li>
        ))}
      </ul>

      <ul className={styles.skillBlock}>
        {frameworks.map((frame, j) => (
          <li key={j} className={styles.skillList}>
            <p className={clsx([styles.framework, styles.skillTag])}>{frame.label}</p>
          </li>
        ))}
      </ul>

      <ul className={styles.skillBlock}>
        {libraries.map((library, k) => (
          <li key={k} className={styles.skillList}>
            <p className={clsx([styles.library, styles.skillTag])}>{library.label}</p>
          </li>
        ))}
      </ul>

      <ul className={styles.skillBlock}>
        {tools.map((tool, l) => (
          <li key={l} className={styles.skillList}>
            <p className={clsx([styles.tool, styles.skillTag])}>{tool.label}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
