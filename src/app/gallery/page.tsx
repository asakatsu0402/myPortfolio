import { AllCategories } from '../../components/organism/blog/AllCategories'
import { Breadcrumbs } from '../../components/organism/blog/BreadCrumbs/BreadCrumbs'
import { PhotoList } from '../../components/organism/blog/PhotoList/PhotoList'
import { ArticleSearch } from '../../components/organism/blog/articleSearch'
import { AsideSection } from '../../components/organism/blog/asideSection'

// import { PageNation } from '../../components/organism/blog/pageNation'
// import { getBlogPage, getCategories } from '../../utils/api'

import { getList } from '../../utils/gallery'

// import { blogFunctions } from "../../functions/blogFunctions"

const Gallery = async (): Promise<JSX.Element> => {
  // TODO 後々対応予定
  const { contents } = await getList()
  console.debug('contents', contents)

  // if (!contents || contents.length === 0) {
  //   return <h1>No contents</h1>
  // }

  return (
    <div>
      <main className="flex-auto">
        <Breadcrumbs />
        {/* <PhotoList list={contents} /> */}

        {/* TODO 後々対応 */}
        {/* <PageNation total={totalCount} /> */}
      </main>

      <aside className="w-2/4 ml-12">
        <ArticleSearch />
        {/* <AsideSection title="カテゴリー">
          {/* <AllCategories categories={categories} /> */}
        {/* </AsideSection> */}

        <AsideSection title="人気の記事">
          <p>fff</p>
        </AsideSection>
      </aside>
    </div>
  )
}

export default Gallery
