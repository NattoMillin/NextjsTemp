//api関連はこのフォルダで。
import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET() {
  const headersList = headers();
  const cookieStore = cookies();

  //情報確認が可能に。
  //console.log('headersList', headersList);
  //console.log('cookieStore', cookieStore);

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}