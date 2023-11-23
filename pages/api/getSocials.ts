// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

const query = groq`
*[_type == "social"]
`;
type Data = {
  socials: Social[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    res.status(200).json({ socials });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}
