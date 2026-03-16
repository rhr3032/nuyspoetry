import { PostType } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export async function getLatestPosts(limit = 3) {
  return prisma.post.findMany({
    orderBy: { publishedDate: "desc" },
    take: limit,
  });
}

export async function getPostsByType(type: PostType) {
  return prisma.post.findMany({
    where: { type },
    orderBy: { publishedDate: "desc" },
  });
}

export async function getArticles() {
  return getPostsByType("article");
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug },
  });
}

export async function getAllSlugs() {
  const posts = await prisma.post.findMany({
    select: { slug: true, updatedAt: true },
  });

  return posts;
}
