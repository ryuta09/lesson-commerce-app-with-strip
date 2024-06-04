import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

export default function Home() {
  const supabase = createServerComponentClient({cookies});
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
