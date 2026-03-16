import type { Metadata } from "next";
import Link from "next/link";
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
    <section className="mx-auto w-full max-w-6xl px-6 py-16" data-dashboard-page>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-4xl font-semibold text-stone-900">Admin Dashboard</h1>
        <Link href="/" className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-amber-200">
          Back to Home
        </Link>
      </div>
      <DashboardClient initialPosts={posts} />
    </section>
  );
}
