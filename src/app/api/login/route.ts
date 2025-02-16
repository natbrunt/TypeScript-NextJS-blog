import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    // Make a request to your remote authentication server
    const { data } = await axios.post('https://your-api/login', {
      username,
      password,
    });

    // Check if the response confirms the user is an admin
    if (data.admin === true && data.ok == true) {
      const cookieStore = await cookies();
      cookieStore.set('authority', 'admin', {
        httpOnly: true,
        secure: true,
        path: '/',
        sameSite: 'strict',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Not an admin' }, { status: 403 });
  } catch (error) {
    // Handle Axios errors properly
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data?.message || 'Authentication failed' },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
