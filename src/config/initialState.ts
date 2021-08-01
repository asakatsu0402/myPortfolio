// Interfaces
import {
  blogDataType,
  categoryDataType,
  pageBlogType
} from '../interfaces/initInterfaces'
import {
  blogContent,
  category,
  toc
} from '../interfaces/molecules/blogInterfaces'

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
export const initCategory: category = {
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

export const initBlog: blogContent = {
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
