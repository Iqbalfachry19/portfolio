export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Project } from '../../../typings';
import { NextResponse } from 'next/server';
const query = groq`
*[_type == "project"]{
    ...,
    technologies[]->
}
`;
export async function GET(request: Request) {
try {
     const projects: Project[] = await sanityClient.fetch(query);
    return NextResponse.json({ projects },{
        status: 200
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}