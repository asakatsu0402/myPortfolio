// Modules
import React  from "react"
import { NextPage } from "next"
// Components
import { Layout } from "../../layouts/layout"
import { BreadList } from "../../components/molecules/blog/breadList"
import { BlogDetail } from "../../components/molecules/blog/blogDetail"
import { AsideSection } from "../../components/molecules/blog/asideSection"
import { ArticleSearch } from "../../components/molecules/blog/articleSearch"
import { AllCategories } from "../../components/molecules/blog/allCategories"
// Functions
import {
  getBlogBy,
  getBlogs,
  getCategories
} from "../../functions/api"

// *************** Type *************** //
type Props = {
  title: string
  categories: Array<any>
  categoriesCount: number
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
  const { data: blog } = await getBlogBy(id)
  const { data: categories } = await getCategories()
  return { props: {
      ...blog,
      categories: categories.contents,
      categoriesCount: categories.totalCount
    }
  }
}

export const DetailBlog: NextPage<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  const { title } = props

  // *************** JSX *************** //
  return(
    <Layout
      title={`Blog - ${title}`}
    >
      <article>
        <BreadList
          title={title}
        />
        <BlogDetail
          data={props}
        />
      </article>
      <aside>
        <ArticleSearch />
        <AsideSection title="カテゴリー">
          <AllCategories
            categories={props.categories}
          />
        </AsideSection>
        <AsideSection title="人気の記事">
          <p></p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default DetailBlog