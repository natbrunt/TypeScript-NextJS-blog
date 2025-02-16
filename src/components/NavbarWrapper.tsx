
import { cookies } from 'next/headers';
import {Navbar} from '@/components/Navbar';

export default async function NavbarWrapper() {
  const cookieStore = await cookies();
  const authority = cookieStore.get('authority')?.value || ''; 
  return <Navbar authority={authority} />;
}
