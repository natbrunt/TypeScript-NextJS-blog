import { cookies } from 'next/headers';
import  AdminPage from './AdminPage';

export default async function ProtectedPage() {
  
  const cookieStore = await cookies();
  const authority = cookieStore.get('authority')?.value;

  if (authority !== 'admin') {
    return <p>Access Denied</p>;
  }

  return (
    <AdminPage />
  );
}


