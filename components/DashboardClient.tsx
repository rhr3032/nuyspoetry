"use client";

import { Post, PostType } from "@prisma/client";
import { useMemo, useState } from "react";

import { DashboardTable } from "@/components/DashboardTable";
import { RichTextEditor } from "@/components/RichTextEditor";

type DashboardClientProps = {
  initialPosts: Post[];
};

type FormState = {
  title: string;
  slug: string;
  content: string;
  type: PostType;
  author: string;
  place: string;
  publishedDate: string;
};

const emptyForm: FormState = {
  title: "",
  slug: "",
  content: "",
  type: "bengali_poem",
  author: "",
  place: "",
  publishedDate: "",
};

function toFormState(post: Post): FormState {
  return {
    title: post.title,
    slug: post.slug,
    content: post.content,
    type: post.type,
    author: post.author,
    place: post.place,
    publishedDate: new Date(post.publishedDate).toISOString().slice(0, 10),
  };
}

export function DashboardClient({ initialPosts }: DashboardClientProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const isEditing = useMemo(() => Boolean(editingPostId), [editingPostId]);

  async function refreshPosts() {
    const response = await fetch("/api/posts", { method: "GET" });
    const data = (await response.json()) as Post[];
    setPosts(data);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Saving...");

    const payload = {
      ...form,
      publishedDate: new Date(form.publishedDate).toISOString(),
    };

    const response = await fetch(isEditing ? `/api/posts/${editingPostId}` : "/api/posts", {
      method: isEditing ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json();
      setStatus(data.error ?? "Failed to save.");
      return;
    }

    await refreshPosts();
    setForm(emptyForm);
    setEditingPostId(null);
    setStatus(isEditing ? "Post updated." : "Post created.");
  }

  function handleEdit(post: Post) {
    setForm(toFormState(post));
    setEditingPostId(post.id);
    setStatus("Editing post...");
  }

  async function handleDelete(post: Post) {
    const shouldDelete = window.confirm(`Delete \"${post.title}\"?`);

    if (!shouldDelete) {
      return;
    }

    setStatus("Deleting...");
    const response = await fetch(`/api/posts/${post.id}`, { method: "DELETE" });

    if (!response.ok) {
      setStatus("Failed to delete post.");
      return;
    }

    await refreshPosts();
    setStatus("Post deleted.");

    if (editingPostId === post.id) {
      setEditingPostId(null);
      setForm(emptyForm);
    }
  }

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-amber-200 bg-white/90 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-stone-900">
          {isEditing ? "Edit post" : "Create new post"}
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Title</span>
              <input
                required
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Slug</span>
              <input
                required
                value={form.slug}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Type</span>
              <select
                value={form.type}
                onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value as PostType }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              >
                <option value="bengali_poem">Bengali Poem</option>
                <option value="english_poem">English Poem</option>
                <option value="article">Essay</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Author</span>
              <input
                required
                value={form.author}
                onChange={(e) => setForm((prev) => ({ ...prev, author: e.target.value }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Place</span>
              <input
                required
                value={form.place}
                onChange={(e) => setForm((prev) => ({ ...prev, place: e.target.value }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-stone-700">Published Date</span>
              <input
                required
                type="date"
                value={form.publishedDate}
                onChange={(e) => setForm((prev) => ({ ...prev, publishedDate: e.target.value }))}
                className="w-full rounded-xl border border-stone-300 px-3 py-2"
              />
            </label>
          </div>

          <label className="space-y-1 block">
            <span className="text-sm text-stone-700">Content</span>
            <RichTextEditor
              value={form.content}
              onChange={(content) => setForm((prev) => ({ ...prev, content }))}
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700"
            >
              {isEditing ? "Update post" : "Create post"}
            </button>
            {isEditing ? (
              <button
                type="button"
                className="rounded-full border border-stone-300 px-5 py-2 text-sm hover:bg-stone-100"
                onClick={() => {
                  setEditingPostId(null);
                  setForm(emptyForm);
                  setStatus("Create mode activated.");
                }}
              >
                Cancel edit
              </button>
            ) : null}
            <p className="text-sm text-stone-700">{status}</p>
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-stone-900">All posts</h2>
        <DashboardTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </section>
    </div>
  );
}
