export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Experience } from '../../../typings';
const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;
export async function GET(request: Request) {
try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    return Response.json({ experiences },{
        status: 200
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}