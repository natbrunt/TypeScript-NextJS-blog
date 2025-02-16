import { cookies } from 'next/headers';
import SubmitArticleForm from "./SubmitArticleForm"

export default async function ProtectedPage() {
  const cookieStore = await cookies();  
  const authority = cookieStore.get('authority')?.value;

  if (authority !== 'admin') {
    return <p>Access Denied</p>;
  }

  return <SubmitArticleForm />;
}
