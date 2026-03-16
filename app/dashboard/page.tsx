import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { DashboardClient } from "@/components/DashboardClient";
import { getAuthPayloadFromCookies } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard | Nuy's Poetry",
  description: "Manage poems and essays.",
};

export default async function DashboardPage() {
  const auth = await getAuthPayloadFromCookies();

  if (!auth) {
    redirect("/login");
  }

  const posts = await prisma.post.findMany({
    orderBy: { publishedDate: "desc" },
  });

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-4xl font-semibold text-stone-900">Admin Dashboard</h1>
        <p className="rounded-full bg-amber-100 px-4 py-2 text-sm text-stone-700">Logged in as {auth.username}</p>
      </div>
      <DashboardClient initialPosts={posts} />
    </section>
  );
}
