'use client';

import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout');
    router.push('/login');
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


