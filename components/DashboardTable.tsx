"use client";

import { Post } from "@prisma/client";

import { postTypeLabel } from "@/lib/post-types";

type DashboardTableProps = {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
};

export function DashboardTable({ posts, onEdit, onDelete }: DashboardTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-amber-200 bg-white/90 shadow-sm">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-amber-200 bg-amber-50/80 text-stone-700">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b border-amber-100 align-top">
              <td className="px-4 py-3 font-medium text-stone-900">{post.title}</td>
              <td className="px-4 py-3 text-stone-700">{postTypeLabel[post.type]}</td>
              <td className="px-4 py-3 text-stone-700">
                {new Date(post.publishedDate).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-full border border-stone-300 px-3 py-1 hover:bg-stone-100"
                    onClick={() => onEdit(post)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-red-300 px-3 py-1 text-red-700 hover:bg-red-50"
                    onClick={() => onDelete(post)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {posts.length === 0 ? (
            <tr>
              <td className="px-4 py-6 text-stone-600" colSpan={4}>
                No posts yet.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
