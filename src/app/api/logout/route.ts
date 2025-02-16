import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ success: true });

  // Remove the "authority" cookie by setting it to an empty value with an expired date
  response.cookies.set('authority', '', {
    httpOnly: true,
    secure: true,
    path: '/',
    sameSite: 'strict',
    expires: new Date(0), // Expire the cookie immediately
  });

  return response;
}
