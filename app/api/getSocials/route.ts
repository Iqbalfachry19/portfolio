export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Social } from '../../../typings';
const query = groq`
*[_type == "social"]
`;
export async function GET(request: Request) {
try {
     const socials: Social[] = await sanityClient.fetch(query);
    return Response.json({ socials },{
        status: 200
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}