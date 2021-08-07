// Modules
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

// Components
import { Layout } from '../../layouts/layout'
import { AllCategories } from '../../components/molecules/blog/allCategories'
import { ArticleSearch } from '../../components/molecules/blog/articleSearch'
import { AsideSection } from '../../components/molecules/blog/asideSection'
import { BlogDetail } from '../../components/molecules/blog/blogDetail'
import { BreadCrumbs } from '../../components/molecules/blog/breadCrumbs'
// Functions
import { getBlogBy, getBlogs, getCategories } from '../../functions/api'
import { processingDom } from '../../functions/blogFunctions'
// Interfaces
import { blogContent } from '../../interfaces/molecules/blogInterfaces'
import { blogDataType } from '../../interfaces/initInterfaces'

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
  const { data: blog }: blogContent = await getBlogBy(id)

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

export const DetailBlog: NextPage<blogContent> = (props: blogContent) => {
  // *************** Const *************** //
  const { title } = props

  // *************** JSX *************** //
  return (
    <Layout title={`Blog - ${title}`} flex={true}>
      <article>
        <BreadCrumbs title={title} />
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
