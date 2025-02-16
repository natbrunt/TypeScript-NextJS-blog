import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authority = req.cookies.get('authority')?.value;

  if (authority !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
