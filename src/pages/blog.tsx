// Modules
import React from "react"
// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
import { AllBlogs } from "../components/molecules/blog/allBlogs"
// Functions
import { getBlogs } from "../functions/api"

// *************** Type *************** //
type Props = { contents?: Array<any> }

// *************** Get API *************** //
export const getStaticProps = async () => await getBlogs()

export const Blog: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="Blog"
      />
      <AllBlogs
        list={props.contents}
      />
    </Layout>
  )
}

export default Blog