// Modules
import axios from 'axios'

// *************** Functions *************** //
// GET
/**
 * GET ALL Blog
 */
export const getBlogs = () =>
  axios.get(process.env.All_Blog_Url, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY,
    },
  })

/**
 * GET ALL Blog
 */
export const getBlogPage = (nowPage: number) =>
  axios.get(`${process.env.All_Blog_Url}?offset=${(nowPage - 1) * 5}&limit=5`, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY,
    },
  })

/**
 * GET Blog Detail
 * @param id
 */
export const getBlogBy = (id: any) =>
  axios.get(`${process.env.All_Blog_Url}/${id}`, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY,
    },
  })

/**
 * GET ALL Categories
 */
export const getCategories = () =>
  axios.get(process.env.All_Categories_Url, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY,
    },
  })

/**
 *
 * @param item
 */
export const isBlogsQuery = (item: unknown): item is { keyword: string } => {
  const target = item as { keyword: string }
  return 'keyword' in target && typeof target.keyword === 'string'
}

export const getPreview = async (slug, draftKey) => {
  await axios.get(`${process.env.All_Blog_Url}/${slug}?fields=id&draftKey=${draftKey}`, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
}
