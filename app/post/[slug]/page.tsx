import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPostBySlug } from "@/lib/posts";

export const dynamic = "force-dynamic";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | Nuy's Poetry",
      description: "The requested post was not found.",
    };
  }

  const plainContent = post.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  return {
    title: `${post.title} | Nuy's Poetry`,
    description: plainContent.slice(0, 160),
    openGraph: {
      title: post.title,
      description: plainContent.slice(0, 160),
      type: "article",
      publishedTime: post.publishedDate.toISOString(),
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const isPoem = post.type === "bengali_poem" || post.type === "english_poem";

  // Flatten Quill HTML for poems:
  // 1. Empty <p> → <br>  (stanza gap becomes <br><br>)
  // 2. Content <p>...</p> → ...<br>  (line break)
  const renderedContent = isPoem
    ? post.content
        .replace(/<p[^>]*>\s*(?:<br\s*\/?>)?\s*<\/p>/gi, "<br>")
        .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "$1<br>")
        .replace(/<\/?p[^>]*>/gi, "")
        .trim()
    : post.content;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-stone-500">{post.type.replace("_", " ")}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-stone-900">{post.title}</h1>
      <p className="mt-4 text-sm text-stone-600">
        {new Date(post.publishedDate).toLocaleDateString()} • {post.author} • {post.place}
      </p>
      <div
        className={
          isPoem
            ? "poem-content mt-10"
            : "prose prose-stone mt-10 max-w-none leading-8"
        }
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </article>
  );
}
