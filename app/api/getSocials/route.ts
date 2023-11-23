export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Social } from '../../../typings';
import { NextResponse } from 'next/server';
const query = groq`
*[_type == "social"]
`;
export async function GET(request: Request) {
try {
     const socials: Social[] = await sanityClient.fetch(query);
    return NextResponse.json({ socials },{
        status: 200,
        headers: {
      'Content-Type': 'application/json',
           }
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}