// Modules
import React from 'react'

// 記事検索
export type searchValue = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

// 記事カテゴリー
export type category = {
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

// ブログ詳細ページ
export type blogDetail = {
  categoriesCount: number
  updatedAt: any
  title: string
  tag: any
  thumbnail: any
  categories: category
  body: any
  toc_visible: boolean
  toc: toc['toc']
}
