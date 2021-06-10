// Modules
import React from "react"
import { NextPage } from "next"
// Components
import { Layout } from "../../layouts/layout"
import { PageHead } from "../../layouts/pageHead"
import { AllBlogs } from "../../components/molecules/blog/allBlogs"
// Functions
import { getBlogs } from "../../functions/api"

// *************** Type *************** //
type Props = { contents?: Array<any> }

// *************** Get API *************** //
export const getStaticProps = async () => {
  const { data } = await getBlogs ()
  return { props: { contents: data.contents } }
}

export const Blog: NextPage<Props> = (
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