// Interfaces
import type { blogDataType, categoryDataType, pageBlogType } from '../types/initInterfaces'
import type { CategoryType, DetailPageType } from '../types/organism/blogInterfaces'

/**
 * ブログ
 */
export const initBlogData: blogDataType = { 
  blogList: []
}

/**
 * ブログ（ページ単位）
 */
export const initPageBlog: pageBlogType = {
  blogList: [],
  totalCount: 0
}

/**
 * 全カテゴリー
 */
export const initCategoriesData: categoryDataType = {
  categories: [],
  totalCount: 0
}

/**
 * カテゴリー
 */
export const initCategory: CategoryType = {
  name: '',
  createdAt: '',
  id: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  updatedAt: ''
}

export const initToc = [
  {
    toc: {
      id: '',
      name: '',
      text: ''
    }
  }
]

export const initBlog: DetailPageType = {
  categoriesCount: 0,
  updatedAt: '',
  title: '',
  tag: [],
  thumbnail: '',
  categories: initCategory,
  body: '',
  toc_visible: false,
  toc: []
}
