import { cookies } from "next/headers";

export async function isAdmin() {
  const cookieStore = await cookies();
  return cookieStore.get("authority")?.value === "admin"; // Ensure the user has admin privileges
}
