import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@prisma/client";

import { PostCard } from "@/components/PostCard";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nuy's Poetry | Home",
  description: "A bilingual poetry and essay platform for Bengali and English literary works.",
  openGraph: {
    title: "Nuy's Poetry",
    description: "Read Bengali poems, English poems, and reflective essays.",
    type: "website",
  },
};

export default async function Home() {
  let latestPoems: Post[] = [];
  let latestArticles: Post[] = [];

  try {
    [latestPoems, latestArticles] = await Promise.all([
      prisma.post.findMany({
        where: { type: { in: ["bengali_poem", "english_poem"] } },
        orderBy: { publishedDate: "desc" },
        take: 3,
      }),
      prisma.post.findMany({
        where: { type: "article" },
        orderBy: { publishedDate: "desc" },
        take: 3,
      }),
    ]);
  } catch (error) {
    console.error("Failed to load home page posts:", error);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-amber-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(251,113,133,0.16),transparent_42%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-600">Bengali & English Literary Journal</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-stone-900 md:text-6xl">
            Where poems breathe in two languages.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Explore contemporary Bengali and English poetry, alongside essays on craft, place, and the living pulse of language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://rhrafi3032.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-700"
            >
              Visit Portfolio
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-medium text-stone-800 hover:bg-stone-100"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="rounded-4xl border border-white/60 bg-white/45 p-8 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-600">Poet Portfolio</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-stone-900 md:text-6xl">
              Writing a life across memory, language, and silence.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Nuy writes in Bangla and English, shaping poems and essays from longing, weather, distance,
              and the private music of inner life. This page gathers the voice, practice, and literary path
              in one portfolio-style portrait.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/writings"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Explore Writings
              </Link>
              <Link
                href="/writings?type=essay"
                className="rounded-full border border-stone-300/80 bg-white/80 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-white"
              >
                Read Essays
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Languages</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Bangla + English</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Forms</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Poems + Essays</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/55 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Practice</p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">Reading, mentoring, reflection</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_50px_rgba(28,25,23,0.12)] backdrop-blur-md md:p-8">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/40">
              <Image
                src="/poet-portrait.svg"
                alt="Poet portrait"
                width={900}
                height={1100}
                className="h-104 w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-white/70 bg-white/60 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Artist Statement</p>
              <p className="mt-3 text-base leading-8 text-stone-700">
                The work moves between tenderness and distance, using image, place, and stillness to reveal
                what ordinary speech often leaves unnamed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-stone-900">Latest Poems</h2>
            <p className="mt-2 text-stone-700">Recent Bengali and English works from the poet.</p>
          </div>
          <Link href="/writings" className="text-sm font-medium text-stone-700 underline">
            Browse all poems
          </Link>
        </div>
        {latestPoems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 p-8 text-stone-700">
            No poems available right now.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {latestPoems.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-stone-900">Latest Essays</h2>
            <p className="mt-2 text-stone-700">Essays and reflections on poetry and life.</p>
          </div>
          <Link href="/writings?type=essay" className="text-sm font-medium text-stone-700 underline">
            Browse all essays
          </Link>
        </div>
        {latestArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 p-8 text-stone-700">
            No essays available right now.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
