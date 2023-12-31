export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Skill } from '../../../typings';
import { NextResponse } from 'next/server';
const query = groq`
*[_type == "skill"]
`;
export async function GET(request: Request) {
try {
     const skills: Skill[] = await sanityClient.fetch(query);
    return NextResponse.json({ skills },{
        status: 200,
        headers: {
      'Content-Type': 'application/json',
           }
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}