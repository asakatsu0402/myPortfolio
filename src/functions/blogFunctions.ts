// Modules
import { processer, createTableOfContents } from 'microcms-richedit-processer'

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
