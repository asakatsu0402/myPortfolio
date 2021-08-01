// Modules
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'

// Components
import { AllCategories } from '../../components/molecules/blog/allCategories'
import { ArticleSearch } from '../../components/molecules/blog/articleSearch'
import { AsideSection } from '../../components/molecules/blog/asideSection'
import { BlogDetail } from '../../components/molecules/blog/blogDetail'
import { BreadCrumbs } from '../../components/molecules/blog/breadCrumbs'
// Functions
import { getBlogBy, getBlogs, getCategories } from '../../functions/api'
import { processingDom } from '../../functions/blogFunctions'
// Interfaces
import { blogDetail } from '../../interfaces/molecules/blogInterfaces'
import { Layout } from '../../layouts/layout'

// *************** Get API *************** //
export const getStaticPaths = async () => {
  const { data } = await getBlogs()
  const paths = data.contents.map((path) => `/blog/${path.id}`)
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<blogDetail> = async ({ params }) => {
  const { id } = params
  const { data: blog } = await getBlogBy(id)
  const { data: categories } = await getCategories()
  const { body, toc } = await processingDom(blog.body)
  blog.body = body

  return {
    props: {
      ...blog,
      toc,
      categories: categories.contents,
      categoriesCount: categories.totalCount
    }
  }
}

export const DetailBlog: NextPage<blogDetail> = (props: blogDetail) => {
  // *************** Const *************** //
  const { title } = props

  // *************** JSX *************** //
  return (
    <Layout title={`Blog - ${title}`}>
      <article>
        <BreadCrumbs title={title} />
        <BlogDetail {...props} />
      </article>
      <aside>
        <ArticleSearch />
        <AsideSection title="カテゴリー">
          <AllCategories categories={props.categories} />
        </AsideSection>
        <AsideSection title="人気の記事">
          <p></p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default DetailBlog
