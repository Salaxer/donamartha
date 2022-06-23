// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import initFirebase from '@ServerAPI/firebase.init';

type Data = {
  name: string
}

interface Request{
    id: ""
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (!req.body) {
        return res.status(500).json({ name: 'No tienes permisoss' })
    }
    res.status(200).json({ name: 'John Doe' })
}