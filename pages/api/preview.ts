import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req)
  res.setPreviewData({})
  res.end('Preview mode enabled')
}
