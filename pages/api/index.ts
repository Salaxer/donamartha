// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  welcome: string,
  another: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    welcome: "Hi! rare person who visit this link, I love you. xD, no, i'm sorry that was a joke",
    another: "IDK why you are here, but this is my name: Salaxer, well, this isn't my name, this is my tag name o apodo en español :')"
   })
}
