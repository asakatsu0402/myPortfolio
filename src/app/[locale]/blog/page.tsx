import { AllBlogs } from '../../components/organism/blog/allBlogs'
import { AllCategories } from '../../components/organism/blog/allCategories'
import { ArticleSearch } from '../../components/organism/blog/articleSearch'
import { AsideSection } from '../../components/organism/blog/asideSection'
import { Breadcrumbs } from '../../components/organism/blog/breadCrumbs'
import { PageNation } from '../../components/organism/blog/pageNation'
import { Layout } from '../../components/templates/layout'
import { getBlogPage, getCategories } from '../../utils/api'

import type { NextPage } from 'next'
// import { blogFunctions } from "../../functions/blogFunctions"

type Props = {
  contents?: Array<any>
  totalCount: number
  categories?: any
}

// *************** Get API *************** //
// export const getStaticPath = async () => {
//   const { blog } = blogFunctions()
//   const { data } = await getBlogs()
//   const paths = blog.getRangePath(data, 5)
//   return {
//     paths,
//     fallback: false
//   }
// }

export const getStaticProps = async (number: number) => {
  const blogs = await getBlogPage(number)
  const categories = await getCategories()
  return {
    props: {
      contents: blogs.blogList,
      totalCount: blogs.totalCount,
      categories: categories.categories
    }
  }
}

const Blog: NextPage<Props> = (props: Props) => {
  return (
    <Layout title="Blog" flex={true}>
      <main className="flex-auto">
        <Breadcrumbs />
        <AllBlogs list={props.contents} />
        <PageNation total={props.totalCount} />
      </main>
      <aside className="w-2/4 ml-12">
        <ArticleSearch />
        <AsideSection title="カテゴリー">
          <AllCategories categories={props.categories} />
        </AsideSection>
        <AsideSection title="人気の記事">
          <p>fff</p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default Blog
