// Modules
import { NextPage } from 'next'
// Components
import { AllBlogs } from '../../components/molecules/blog/allBlogs'
import { AllCategories } from '../../components/molecules/blog/allCategories'
import { ArticleSearch } from '../../components/molecules/blog/articleSearch'
import { AsideSection } from '../../components/molecules/blog/asideSection'
import { PageNation } from '../../components/molecules/blog/pageNation'
// Functions
import { getBlogPage, getCategories } from '../../functions/api'
import { Layout } from '../../layouts/layout'
// import { blogFunctions } from "../../functions/blogFunctions"

// *************** Type *************** //
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

export const Blog: NextPage<Props> = (props: Props) => {
  // *************** JSX *************** //
  return (
    <Layout title="Blog" flex={true}>
      <main className="flex-auto">
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
