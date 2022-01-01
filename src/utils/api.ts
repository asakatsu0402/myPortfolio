// Modules
import axios from 'axios'
// Config
import { globalAxios } from '../config/commonConfig'
import {
  initBlog,
  initBlogData,
  initCategoriesData,
  initPageBlog
} from '../config/initialState'
// Interfaces
import {
  blogDataType,
  categoryDataType,
  pageBlogType
} from '../interfaces/initInterfaces'

// *************** Functions *************** //
/**
 * GET ALL Blog
 */
export const getBlogs = async () => {
  const blogsData: blogDataType = initBlogData
  try {
    const res = await globalAxios.get(process.env.All_Blog_Url)
    blogsData.blogList = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getBlogs`)
  }
  return blogsData
}

/**
 * GET ALL Blog
 */
export const getBlogPage = async (nowPage: number) => {
  const blogsData: pageBlogType = initPageBlog
  try {
    const res = await globalAxios.get(
      `${process.env.All_Blog_Url}?offset=${(nowPage - 1) * 5}&limit=5`
    )
    blogsData.blogList = res.data.contents
    blogsData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogs`)
  }
  return blogsData
}

/**
 * GET ALL Categories
 */
export const getCategories = async () => {
  const categoriesData: categoryDataType = initCategoriesData
  try {
    const res = await globalAxios.get(process.env.All_Categories_Url)
    categoriesData.categories = res.data.contents
    categoriesData.totalCount = res.data.totalCount
  } catch (error) {
    throw new Error(`API ERROR: getBlogs`)
  }
  return categoriesData
}

/**
 * GET Blog Detail
 * @param id
 */
export const getBlogBy = async (id: any) => {
  const blogData: any = initBlog
  try {
    const res = await globalAxios.get(`${process.env.All_Blog_Url}/${id}`)
    blogData.data = res.data
  } catch (error) {
    throw new Error(`API ERROR: getBlogs`)
  }
  return blogData
}

/**
 *
 * @param item
 */
export const isBlogsQuery = (item: unknown): item is { keyword: string } => {
  const target = item as { keyword: string }
  return 'keyword' in target && typeof target.keyword === 'string'
}

export const getPreview = async (slug, draftKey) => {
  await axios.get(
    `${process.env.All_Blog_Url}/${slug}?fields=id&draftKey=${draftKey}`,
    {
      headers: {
        'X-API-KEY': process.env.API_KEY
      }
    }
  )
}
