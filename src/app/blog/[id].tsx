// Modules
import type { GetStaticProps, NextPage } from 'next'
// Components
import { Layout } from '../../components/templates/layout'
import { AllCategories } from '../../components/molecules/blog/allCategories'
import { ArticleSearch } from '../../components/molecules/blog/articleSearch'
import { AsideSection } from '../../components/molecules/blog/asideSection'
import { BlogDetail } from '../../components/molecules/blog/blogDetail'
// Utils
import { getBlogBy, getBlogs, getCategories } from '../../utils/api'
import { processingDom } from '../../utils/blogFunctions'
// Types
import type { blogDataType } from '../../types/initInterfaces'

// *************** Get API *************** //
export const getStaticPaths = async () => {
  const blogs: blogDataType = await getBlogs()
  const paths = blogs.blogList.map((path) => `/blog/${path.id}`)
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData
}) => {
  const { id } = params
  const { data: blog }: any = await getBlogBy(id)

  if (!id) throw Error('記事が見当たりません。')

  const categories = await getCategories()
  const { body, toc } = await processingDom(blog.body)
  blog.body = body

  return {
    props: {
      ...blog,
      toc,
      categories: categories.categories,
      categoriesCount: categories.totalCount
    }
  }
}

export const DetailBlog: NextPage<any> = (props: any) => {
  // *************** Const *************** //
  const { title } = props

  // *************** JSX *************** //
  return (
    <Layout title={`Blog - ${title}`} flex={true}>
      <article>
        <BlogDetail {...props} />
      </article>
      <aside>
        <ArticleSearch />
        {/*<AsideSection title="カテゴリー">*/}
        {/*  <AllCategories categories={props.categories} />*/}
        {/*</AsideSection>*/}
        <AsideSection title="人気の記事">
          <p></p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default DetailBlog
