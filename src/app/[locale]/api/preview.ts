// Modules
import type { NextApiResponse, NextApiRequest } from 'next'
// Libs
import { getPreview } from '../../utils/api'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // requestのクエリがなければエラー
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const content = await getPreview(req.query.slug, req.query.draftKey)

  if (!content as any) return res.status(401).json({ message: 'Invalid slug' })

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey
  })

  // eslint-disable-next-line no-magic-numbers
  res.writeHead(307, { Location: `/${content.id}` })
  res.end('Preview mode enabled')
}
