import { NextResponse } from 'next/server';

/* api/xxx　のxxxでApiを分岐させることも可能。
'http://localhost:3000/api?name=John'　のようにURLに載せることも可能*/

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return NextResponse.json(id);
}