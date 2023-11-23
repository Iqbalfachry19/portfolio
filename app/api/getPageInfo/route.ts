
export const dynamic = 'force-dynamic' // defaults to force-static
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { PageInfo } from '../../../typings';
import { NextResponse } from 'next/server';
const query = groq`
*[_type == "pageInfo"][0]
`;
export async function GET(request: Request) {
try {
     const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    return NextResponse.json({ pageInfo },{
        status: 200
    });
  } catch (err) {
    console.error('Error fetching or parsing JSON:', err);
  }
}