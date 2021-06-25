// Modules
import axios from "axios"

// *************** Functions *************** //
// GET
/**
 * GET ALL Blog
 */
export const getBlogs = () => (
  axios.get(process.env.All_Blog_Url,
    { headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY
    }}
  )
)

/**
 * GET ALL Blog
 */
export const getBlogPage = (
  nowPage: number
) => (
  axios.get(`${process.env.All_Blog_Url}?offset=${(nowPage-1) * 5}&limit=5`,
    { headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY
    }}
  )
)

/**
 * GET Blog Detail
 * @param id
 */
export const getBlogBy = id => (
  axios.get(`${process.env.All_Blog_Url}/${id}`, { headers: {
    'Content-type': 'application/json',
    'X-API-KEY': process.env.API_KEY
  }})
)
/**
 * GET ALL Blog
 */
export const getCategories = () => (
  axios.get(process.env.All_Categories_Url, { headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.API_KEY
    }})
)