// Modules
import axios from "axios"
// Config
import { X_API_KEY } from "../config/apiConfig"
import { getBlogsUrl } from "../config/apiConfig"

// *************** Functions *************** //
// GET
export const getAPI = async (
  url: string
) => {
  const { data } = await axios.get(url)
  return data
}

export const getBlogs = async () => {
  const { data } = await axios.get(getBlogsUrl, {
    headers: { 'X-API-KEY': X_API_KEY }
  })
  return { props: { contents: data.contents } }
}