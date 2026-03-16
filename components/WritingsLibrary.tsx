"use client";

import type { Post } from "@prisma/client";
import { useDeferredValue, useMemo, useState } from "react";

import { PostCard } from "@/components/PostCard";

type WritingsLibraryProps = {
  posts: Post[];
  title: string;
  description: string;
};

function getSearchableText(post: Post) {
  const plainContent = post.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  return [post.title, post.author, post.place, plainContent].join(" ").toLowerCase();
}

export function WritingsLibrary({ posts, title, description }: WritingsLibraryProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredPosts = useMemo(() => {
    if (!normalizedQuery) {
      return posts;
    }

    return posts.filter((post) => getSearchableText(post).includes(normalizedQuery));
  }, [normalizedQuery, posts]);

  return (
    <div>
      <div className="rounded-3xl border border-white/60 bg-white/45 p-7 shadow-[0_16px_42px_rgba(28,25,23,0.1)] backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.24em] text-stone-600">Nuy&apos;s Library</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-8 text-stone-700">{description}</p>
          </div>

          <div className="w-full max-w-md">
            <label htmlFor="writings-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
              Live Search
            </label>
            <div className="rounded-2xl border border-white/65 bg-white/65 p-2 shadow-[0_10px_24px_rgba(28,25,23,0.08)] backdrop-blur-md">
              <input
                id="writings-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, keyword, place, or author"
                className="w-full rounded-xl border border-transparent bg-transparent px-4 py-3 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-amber-200 focus:bg-white/80"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-sm text-stone-600">
          <p>
            {normalizedQuery
              ? `${filteredPosts.length} result${filteredPosts.length === 1 ? "" : "s"} for \"${deferredQuery.trim()}\"`
              : `${posts.length} writing${posts.length === 1 ? "" : "s"} in this view`}
          </p>
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-700 transition hover:bg-amber-50"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white/60 p-8 text-stone-700 backdrop-blur">
          No writings matched your search.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}