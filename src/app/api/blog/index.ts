// Modules
import type { NextApiRequest, NextApiResponse } from 'next'
// Utils
import { isBlogsQuery } from '../../../utils/api'

export const getSearchBlogs = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // クエリのチェック
  if (!isBlogsQuery(req.body)) {
    return res.status(404).end()
  }

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY ?? '' }
  }
  const blogs = await fetch(
    `https://your-service.microcms.io/api/v1/blogs?q=${encodeURI(req.body.keyword)}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null)

  return res.status(200).json(blogs)
}

export default getSearchBlogs
