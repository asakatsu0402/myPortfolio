// Modules
import axios from "axios"

// *************** Functions *************** //
// GET
export const getAPI = async (
  url: string
) => {
  const { data } = await axios.get(url)
  return data
}

export const getBlogs = async () => {
  const { data } = await axios.get(process.env.All_Blog_Url,
    { headers: { 'X-API-KEY': process.env.API_KEY } }
  )
  return { props: { contents: data.contents } }
}