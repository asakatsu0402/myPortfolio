// Modules
import React from "react"
import { NextPage } from "next"
// Components
import { Layout } from "../../layouts/layout"
import { PageHead } from "../../layouts/pageHead"
import { AllBlogs } from "../../components/molecules/blog/allBlogs"
import { AsideSection } from "../../components/molecules/blog/asideSection"
// Functions
import { getBlogs } from "../../functions/api"

// *************** Type *************** //
type Props = { contents?: Array<any> }

// *************** Get API *************** //
export const getStaticProps = async () => {
  const { data } = await getBlogs()
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
      <main className="flex-auto">
        <AllBlogs
          list={props.contents}
        />
      </main>
      <aside className="w-2/4 ml-12">
        <AsideSection
          title="カテゴリー"
        >
          <p>fdf</p>
        </AsideSection>
        <AsideSection
          title="人気の記事"
        >
         <p>fff</p>
        </AsideSection>
      </aside>
    </Layout>
  )
}

export default Blog
