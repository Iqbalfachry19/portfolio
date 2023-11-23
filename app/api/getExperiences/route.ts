export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Experience } from '../../../typings';
import { NextResponse } from 'next/server';
const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;
export async function GET(request: Request) {
try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    return NextResponse.json({ experiences },{
        status: 200,
           headers: {
      'Content-Type': 'application/json',
           }
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}