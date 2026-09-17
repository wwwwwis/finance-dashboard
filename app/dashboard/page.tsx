import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/auth/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return (
    <div className="p-6">
      <p>Signed in as {user.email}</p>
      <form action={signOut} className="mt-4">
        <button type="submit" className="rounded bg-black px-3 py-1 text-white">
          Sign out
        </button>
      </form>
    </div>
  );
}
