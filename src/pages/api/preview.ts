// Modules
import {
  NextApiResponse,
  NextApiRequest
} from 'next'
import { getPreview } from "../../functions/api"

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const content: any = await getPreview(
    req.query.slug,
    req.query.draftKey
  )

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  })

  res.writeHead(307, { Location: `/${content.id}` })
  res.end('Preview mode enabled')
}