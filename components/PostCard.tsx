import Link from "next/link";
import { Post } from "@prisma/client";

import { postTypeLabel } from "@/lib/post-types";

type PostCardProps = {
  post: Post;
};

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

export function PostCard({ post }: PostCardProps) {
  const plainText = decodeHtmlEntities(post.content.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
  const previewText = plainText.slice(0, 180);
  const hasMoreText = plainText.length > 180;

  return (
    <article className="group rounded-3xl border border-white/65 bg-white/45 p-6 shadow-[0_12px_34px_rgba(28,25,23,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_18px_46px_rgba(28,25,23,0.16)]">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-500">{postTypeLabel[post.type]}</p>
      <h3 className="text-2xl font-semibold leading-tight text-stone-900 transition group-hover:text-stone-700">{post.title}</h3>
      <p className="mt-3 text-sm text-stone-500">
        {new Date(post.publishedDate).toLocaleDateString()} • {post.place}
      </p>
      <p className="mt-4 overflow-hidden break-words text-base leading-8 text-stone-700 [overflow-wrap:anywhere]">
        {previewText}
        {hasMoreText ? "..." : ""}
      </p>
      <Link
        href={`/post/${post.slug}`}
        className="mt-5 inline-block rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-amber-50"
      >
        Read full post
      </Link>
    </article>
  );
}
