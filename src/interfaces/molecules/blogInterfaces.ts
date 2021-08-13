// Modules
import React from 'react'
import { ParsedUrlQuery } from 'querystring'

// 記事検索
export type searchValue = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

// 記事カテゴリー
export type CategoryType = {
  name: string
  createdAt: string
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

// 目次
export type toc = {
  toc: {
    id: string
    name: string
    text: string
  }[]
}

// パンくずリスト
export type BreadcrumbsType = {
  title?: string | undefined
  id?: string | undefined
}

// ブログ詳細ページ
export type detailStatic = {
  params: ParsedUrlQuery
  preview: boolean | undefined
  previewData: string | undefined
}

// ブログ詳細ページ
export type DetailPageType = {
  categoriesCount: any
  updatedAt: string
  title: string
  tag: Array<any>
  thumbnail: any
  categories: any
  body: string
  toc_visible: boolean
  toc: Array<any>
}

// ブログ詳細コンポーネント
export type BlogDetailType = {
  id: string
  categoriesCount: number
  createdAt: string
  updatedAt: string
  title: string
  tag: Array<any>
  thumbnail: any
  categories: CategoryType
  body: string
  toc_visible: boolean
  toc: toc['toc']
}

// ブログ記事シェア
export type ShareType = {
  id?: string
  title?: string
}
