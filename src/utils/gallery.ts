import { createClient } from 'microcms-js-sdk'
import { processer, createTableOfContents } from 'microcms-richedit-processer'

import type {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  MicroCMSListResponse
} from 'microcms-js-sdk'

type Gallery = {
  id: string
  title: string
  content: string
  eyecatch?: MicroCMSImage
} & MicroCMSDate

export const blogFunctions = () => {
  const blog = {
    getRangePath: (data: Array<any>, perPage: number) => {
      // ページの範囲を取得
      const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
      // ページのパスを返す
      return range(1, Math.ceil(data.length + 1 / perPage)).map((number) => `/blog/page/${number}`)
    }
  }

  return { blog }
}

/**
 * 目次を生成する
 * @param htmlString
 */
export const processingDom = async (htmlString: any) => {
  return {
    body: await processer(htmlString),
    toc: createTableOfContents(htmlString)
  }
}

// NOTE 要確認
if (!process.env.ALL_GALLERY_URL) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

const client = createClient({
  serviceDomain: process.env.ALL_GALLERY_URL,
  apiKey: process.env.API_KEY
})

export const getList = async (
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<Gallery>> => {
  const listData = await client.getList<Gallery>({
    endpoint: 'gallery',
    queries
  })

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return listData
}

// export const getDetail = async (contentId: string, queries?: MicroCMSQueries): Promise<Gallery> => {
//   const detailData = await client.getListDetail<Gallery>({
//     endpoint: 'gallery',
//     contentId,
//     queries
//   })

//   // データの取得が目視しやすいよう明示的に遅延効果を追加
//   await new Promise((resolve) => setTimeout(resolve, 3000))

//   return detailData
// }
