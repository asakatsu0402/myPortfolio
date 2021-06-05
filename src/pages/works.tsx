// Modules
import React from "react"
// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
import { WorksList } from "../components/molecules/works/worksList"
// Styles

export const Works = () => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="Works"
      />
      <WorksList />
    </Layout>
  )
}

export default Works