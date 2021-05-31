// Modules

// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
// Styles
// import styles from '../styles/Home.module.css'

export const About = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="asakatsu Blog | About"
      />
      <div>
        <p>About</p>
      </div>
    </Layout>
  )
}

export default About