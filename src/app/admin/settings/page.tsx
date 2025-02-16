
//vanilla js
import { cookies } from 'next/headers';

export default async function AdminSettings(){
    const cookieStore = await cookies();
    const authority = cookieStore.get('authority')?.value;

    if (authority !== 'admin') {
      return <p>Access Denied</p>;
    }
    return <h1>Admin Settings</h1>
}