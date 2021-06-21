// Modules
import React  from "react"
import { NextPage } from "next"
// Components
import { Layout } from "../../layouts/layout"
import { PageHead } from "../../layouts/pageHead"
import { BreadList } from "../../components/molecules/blog/breadList"
import { BlogDetail } from "../../components/molecules/blog/blogDetail"
// Functions
import {
  getBlogBy,
  getBlogs
} from "../../functions/api"

// *************** Type *************** //
type Props = {
  title: string
}

// *************** Get API *************** //
export const getStaticPaths = async () => {
  const { data } = await getBlogs()
  const paths = data.contents.map(path => `/blog/${path.id}`)
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const { data } = await getBlogBy(id)
  return { props: { ...data }}
}

export const DetailBlog: NextPage<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const { title } = props

  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title={`Blog - ${title}`}
      />
        <article>
          <BreadList
            title={title}
          />
          <BlogDetail
            data={props}
          />
        </article>
        <aside>

        </aside>
    </Layout>
  )
}

export default DetailBlog