// Modules
// import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
// import { useRouter } from 'next/router'
// Components
import { Layout } from '../../../layouts/layout'
import { AllBlogs } from '../../../components/molecules/blog/allBlogs'
import { PageNation } from '../../../components/molecules/blog/pageNation'
import { ArticleSearch } from '../../../components/molecules/blog/articleSearch'
import { AsideSection } from '../../../components/molecules/blog/asideSection'
import { AllCategories } from '../../../components/molecules/blog/allCategories'
// Functions
import { blogFunctions } from '../../../functions/blogFunctions'
import { getBlogs, getBlogPage, getCategories } from '../../../functions/api'

// *************** Get API *************** //
export const getStaticPath = async () => {
  const { blog } = blogFunctions()
  const { data }: any = await getBlogs()
  const paths = blog.getRangePath(data, 5)
  return { paths, fallback: false }
}

export const getStaticProps = async (number: number) => {
  const { data: blogs }: any = await getBlogPage(number)
  const { data: categories }: any = await getCategories()
  return {
    props: {
      contents: blogs.contents,
      totalCount: blogs.totalCount,
      categories: categories.contents
    }
  }
}

// *************** Type *************** //
type Props = {
  contents?: Array<any>
  totalCount: number
  categories?: any
}

export const Search: NextPage<Props> = (props: Props) => {
  // *************** Const *************** //
  // const router = useRouter()
  // const [blogQuery, setBlogQuery] = useState<{ keyword: string } | null>(null)

  // useEffect(() => {
  //   const urlQuery: any = router.query
  //   if (urlQuery) setBlogQuery(urlQuery)
  // }, [router.query])

  // useEffect(() => {
  //   if (blogQuery) {
  //     void (async (): Promise<void> => {
  //       try {
  //         const res = await fetch(`/api/blog`, {
  //           body: JSON.stringify(blogQuery)
  //         })
  //       } catch {
  //         return
  //       }
  //     })()
  //   }
  // }, [])

  // *************** JSX *************** //
  return (
    <Layout title="Blog">
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

export default Search
