// 全記事
export type blogDataType = {
  blogList: Array<any>
}

// 全記事（ページ単位）
export type pageBlogType = {
  blogList: Array<any>
  totalCount: number
}

// カテゴリーデータの初期値
export type categoryDataType = {
  categories: Array<any>
  totalCount: number
}
